# Flow Docs

Developer documentation for Flow Cloud, built with [Fumadocs](https://fumadocs.dev) and Next.js.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000/docs`.

## Validation

```bash
npm run types:check
npm run build
```

## Content Structure

- `content/docs/index.mdx`: docs landing page.
- `content/docs/ide`: Flow IDE workspace docs.
- `content/docs/project-settings`: Project Settings docs.

## Routes

- `/`: lightweight docs homepage.
- `/docs`: Fumadocs documentation app.
- `/api/search`: Fumadocs search route.

## Deployment Target

The intended public docs domain is `docs.flownative.app`.
