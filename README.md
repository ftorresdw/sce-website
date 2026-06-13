# Service Complete Electric Website

React + Vite marketing site for Service Complete Electric.

## Development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`. Content falls back to the files in `src/content/` when Sanity is not configured.

## Headless CMS (Sanity)

Content can be managed in [Sanity Studio](https://www.sanity.io/) for:

- Site settings (hero, navigation, portfolio, contact, footer)
- About page copy and credentials
- Newsroom settings and blog posts
- Award groups
- Leadership team

### Setup

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage).
2. Copy `.env.example` to `.env` and set:
   - `VITE_SANITY_PROJECT_ID`
   - `VITE_SANITY_DATASET` (usually `production`)
3. Install studio dependencies and seed existing content:

```bash
npm install
npm install --prefix studio
npm run cms:seed
```

For seeding, create an API token with **Editor** access in Sanity and set `SANITY_AUTH_TOKEN` in `.env`.

4. Sync CMS content into the site build:

```bash
npm run cms:sync
```

5. Open the editing UI:

```bash
npm run cms
```

Studio runs at `http://localhost:3333` by default.

6. Host the studio for your team (optional):

```bash
npm run cms:deploy
```

### How it works

- `npm run cms:sync` fetches published Sanity content into `src/content/generated/content.json`.
- `src/content/index.ts` merges CMS data over the static defaults in `src/content/*.ts`.
- If `VITE_SANITY_PROJECT_ID` is missing, the site uses static content only.
- Run `npm run cms:sync` (or `npm run dev` / `npm run build`, which run sync first) after publishing CMS changes.

## Environment variables

| Variable | Purpose |
|----------|---------|
| `VITE_BAMBOOHR_DOMAIN` | BambooHR careers embed |
| `VITE_SANITY_PROJECT_ID` | Sanity project for content sync |
| `VITE_SANITY_DATASET` | Sanity dataset (default: `production`) |
| `SANITY_AUTH_TOKEN` | Editor token for `npm run cms:seed` only |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Sync CMS + start Vite dev server |
| `npm run build` | Sync CMS + production build |
| `npm run cms:sync` | Pull Sanity content into the repo |
| `npm run cms` | Start Sanity Studio locally |
| `npm run cms:seed` | Upload current static content to Sanity |
| `npm run cms:deploy` | Deploy Sanity Studio to sanity.studio |
