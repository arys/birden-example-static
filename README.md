# birden static example (React + Vite SPA)

Client-side routed SPA (history.pushState, no router dependency) with routes `/` and `/about`.

## Deploy settings

| Setting | Value |
| --- | --- |
| Framework | static |
| Build command | `npm run build` |
| Output directory | `dist` |
| SPA fallback | on (serve `index.html` for unknown paths such as `/about`) |

Optional env var at build time: `VITE_BUILD_LABEL` (shown on the home page).

## Local

```
npm install
npm run dev
```
