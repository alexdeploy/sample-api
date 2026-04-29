---
name: add-endpoint
description: Adds a new REST endpoint to sample-api following the project's three-layer pattern (service + route + test).
---

# add-endpoint

Use this skill when a task asks for a new endpoint or resource in this repo.
The repo's CLAUDE.md is authoritative — this skill is the executable recipe.

## When to use

- "Add a `/users` endpoint that returns…"
- "Create a route for X"
- "Expose Y over HTTP"

Do NOT use this skill for:
- Modifications to an existing endpoint (edit the files directly).
- Anything that needs persistence (the project has no DB).

## Steps

1. **Service** — `src/services/<name>.service.ts`. Pure function, no Express
   types, returns a plain object. Define an interface for the response.
2. **Route** — `src/routes/<name>.ts`. Imports the service, calls it, returns
   `res.json(...)`. Nothing else in the route file.
3. **Register** — add one `app.use('/<name>', <name>Router)` line in
   `src/app.ts` next to the existing routers.
4. **Test** — `tests/<name>.test.ts`. supertest against the imported `app`.
   Cover the default response, any param variants, and `status === 200`.

## Verify

Run the validation pipeline locally before finishing:

```bash
npm run lint && npm run typecheck && npm test
```

All three must pass. Do not stop at "build succeeds" — the test must
actually exercise the new endpoint.

## Anti-patterns

- Don't put logic inside the route file. Routes are thin.
- Don't introduce new dependencies. Express + Jest is the whole stack.
- Don't modify `src/index.ts` — it only starts the server.
- Don't change the existing greeting/health tests as a side effect.
