# Campus Lost and Found Admin

Admin console for Campus Lost and Found System. It is built with Vue 3, Vite, TypeScript, Element Plus, Pinia, Axios, and ECharts.

## Features

- Admin login and token-based session storage
- Pending lost-and-found review workflow
- Lost-and-found record management
- Category, comment, notice, and user management
- Dashboard overview and recent publishing trend charts

## Development

```bash
pnpm install
pnpm dev
```

The development API proxy is configured in `.env.development`:

```text
VITE_BASE_URL = /api
VITE_DEV_PROXY_TARGET = http://localhost:8080
```

## Build

```bash
pnpm build
```

For production deployment, set `VITE_BASE_URL` to either a reverse-proxy path such as `/api` or an HTTPS API domain that is allowed by your server CORS policy.
