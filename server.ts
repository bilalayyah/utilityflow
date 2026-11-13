import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleAiWorkerRequest } from './worker/src/index';
import type { WorkerEnv } from './worker/src/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

function buildWorkerEnvFromProcess(): WorkerEnv {
  return {
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    GROQ_MODEL: process.env.GROQ_MODEL,
    GROQ_FALLBACK_MODEL: process.env.GROQ_FALLBACK_MODEL,
    ALLOWED_ORIGINS: process.env.AI_ALLOWED_ORIGINS || process.env.ALLOWED_ORIGINS,
    GLOBAL_DAILY_CAP: process.env.GLOBAL_DAILY_CAP,
    WRITING_DAILY_LIMIT: process.env.WRITING_DAILY_LIMIT,
    SUMMARIZE_DAILY_LIMIT: process.env.SUMMARIZE_DAILY_LIMIT,
    FINDER_DAILY_LIMIT: process.env.FINDER_DAILY_LIMIT,
    RATE_LIMIT_PER_MIN: process.env.RATE_LIMIT_PER_MIN,
  };
}

export function createAiApp() {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', true);

  // Read raw text for /api/ai/* so size validation matches the Cloudflare Worker byte-for-byte
  app.use('/api/ai', express.text({ type: '*/*', limit: '64kb' }), async (req, res) => {
    try {
      const protocol = req.protocol || 'http';
      const host = req.get('host') || `localhost:${PORT}`;
      const fullUrl = `${protocol}://${host}${req.originalUrl}`;

      const headers = new Headers();
      for (const [key, value] of Object.entries(req.headers)) {
        if (typeof value === 'string') headers.set(key, value);
        else if (Array.isArray(value)) headers.set(key, value.join(', '));
      }

      if (!headers.has('x-forwarded-for') && req.ip) {
        headers.set('x-forwarded-for', req.ip);
      }

      const method = req.method.toUpperCase();
      const bodyStr =
        method === 'GET' || method === 'HEAD' || method === 'OPTIONS'
          ? undefined
          : typeof req.body === 'string'
          ? req.body
          : '';

      const webRequest = new Request(fullUrl, {
        method,
        headers,
        body: bodyStr,
      });

      const workerResponse = await handleAiWorkerRequest(webRequest, buildWorkerEnvFromProcess());

      res.status(workerResponse.status);
      workerResponse.headers.forEach((value, key) => {
        res.setHeader(key, value);
      });
      const text = await workerResponse.text();
      res.send(text);
    } catch {
      res.status(500).json({
        ok: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Unable to process AI request.',
        },
      });
    }
  });

  return app;
}

async function startServer() {
  const app = createAiApp();
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`UtilityFlow server listening on http://localhost:${PORT}`);
  });
}

// Start HTTP server only when executed directly as entry script (allows clean import in tests)
const entryUrl = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (entryUrl === __filename) {
  startServer().catch((err) => {
    console.error('Failed to start UtilityFlow server:', err);
    process.exit(1);
  });
}
