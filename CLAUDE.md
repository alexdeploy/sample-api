# sample-api

Minimal Express API. One service, no database.

## Structure

- `src/services/` — business logic (pure functions, no side effects)
- `src/routes/` — Express routers, one file per resource
- `src/app.ts` — Express app (no listen call, exported for tests)
- `src/index.ts` — entry point (calls app.listen)
- `tests/` — Jest + supertest integration tests

## Rules

- Keep services as pure functions that return plain objects.
- Routes must only call services and return `res.json(...)`.
- Do not add a database or external dependencies unless explicitly asked.
- Every new route must have a corresponding test in `tests/`.
- Run `npm run lint` and `npm test` before considering a task done.

## Commands

```bash
npm run lint   # ESLint
npm test       # Jest
npm run dev    # ts-node-dev
```
