import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;


export function createAiApp() {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', true);


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

  app.listen(PORT, '127.0.0.1', () => {
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
