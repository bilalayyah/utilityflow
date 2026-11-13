# UtilityFlow Free AI & Cloudflare Deployment Guide

UtilityFlow pairs a static **Cloudflare Pages** frontend (`npm run build` → `dist/`, **88 total tools**: 85 browser utilities + 3 free AI utilities) with a standalone **Cloudflare Worker** (`worker/`) powered strictly by the **Groq API free tier** (`openai/gpt-oss-20b` primary + `llama-3.1-8b-instant` fallback). There is zero Gemini usage, zero login, and zero paid billing escalation.

---

## 1. Architecture & Free-Tier Guardrails

- **Primary Provider**: Groq free tier (`openai/gpt-oss-20b` primary, `llama-3.1-8b-instant` fallback, plus automatic active model discovery on `/openai/v1/models`).
- **Quota & Cost Guardrails (`worker/src/config.ts` & `worker/src/rateLimit.ts`)**:
  - **AI Writing Assistant** (`/ai-writing-assistant/`): `5` free requests / visitor / UTC day (`12,000` char max)
  - **AI Text Summarizer** (`/ai-text-summarizer/`): `5` free requests / visitor / UTC day (`25,000` char max)
  - **AI Smart Tool Finder** (`/ai-tool-finder/`): `10` free requests / visitor / UTC day (`500` char max)
  - **Burst & Global Caps**: `8` requests / minute per visitor and `400` total global AI requests / UTC day.
  - **Privacy**: Visitor IP addresses are salted per UTC day and hashed with SHA-256 (`crypto.subtle.digest`); user text prompts and raw IPs are never stored or logged.

---

## 2. Local Development & AI Studio Preview

1. Set `GROQ_API_KEY` in AI Studio **Settings > Secrets** (or `.env` locally; never commit `.env`).
2. Start the local server on port `3000`:
   ```bash
   npm run dev
   ```
3. Verify endpoints:
   - `GET /api/ai/health`
   - `POST /api/ai/writing`
   - `POST /api/ai/summarize`
   - `POST /api/ai/find-tool`

---

## 3. Deploying Backend Worker to Cloudflare (`worker/`)

1. Authenticate Wrangler CLI:
   ```bash
   cd worker
   npx wrangler login
   ```
2. Create a persistent Cloudflare KV namespace for distributed rate-limiting & daily quotas:
   ```bash
   npx wrangler kv namespace create AI_QUOTA_KV
   ```
   Copy the generated `id` into `worker/wrangler.toml` under `[[kv_namespaces]]` (`binding = "AI_QUOTA_KV"`).
3. Upload your encrypted Groq API secret to the Worker (`UtilityFlow`):
   ```bash
   npx wrangler secret put GROQ_API_KEY
   ```
4. Configure `ALLOWED_ORIGINS` inside `worker/wrangler.toml` with `https://utilityflow.online` (and any temporary `*.pages.dev` preview URL during verification, comma-separated, no trailing slashes).
5. Deploy the Worker (`utilityflow-ai-worker`):
   ```bash
   npx wrangler deploy
   ```

---

## 4. Deploying Frontend to Cloudflare Pages (`GitHub + Pages`)

1. Push the repository to GitHub (`.gitignore` excludes `.env*`, `.dev.vars*`, `.wrangler/`, `dist/`, and `node_modules/`).
2. In **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**, select your repository:
   - **Project name**: `utilityflow` (or your preferred Pages project name)
   - **Framework preset**: `Vite` (or `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Set optional **Build Environment Variables** on Cloudflare Pages (Non-Secret):
   - `VITE_SITE_URL` — canonical site origin, defaults to `https://utilityflow.online` (used for canonical tags, `og:url`, and `sitemap.xml`)
   - `VITE_AI_API_URL` — your deployed `utilityflow-ai-worker` URL (or leave empty if binding a Worker route on `https://utilityflow.online/api/ai/*`)
4. Trigger deployment and verify live routes (`/`, `/tools/`, `/ai-writing-assistant/`, `/ai-text-summarizer/`, `/ai-tool-finder/`, `/sitemap.xml`) in both Light Mode and Dark Mode.
