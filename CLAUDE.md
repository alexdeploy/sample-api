# sample-api — Claude Code Guide

Minimal Express REST API. No database, no authentication, no external services.
TypeScript + Express + Jest.

---

## Project structure

```
src/
├── app.ts                  ← Express app exported without listen (used in tests)
├── index.ts                ← Entry point — only calls app.listen()
├── routes/                 ← One file per resource, registered in app.ts
│   └── greeting.ts
└── services/               ← Pure business logic, no Express types allowed here
    └── greeting.service.ts

tests/
└── greeting.test.ts        ← Integration tests via supertest against app.ts
```

---

## How to add a new feature

Follow this pattern every time. Do not deviate.

### 1. Service (`src/services/<name>.service.ts`)

Pure functions only. No `Request`/`Response` types. Returns a plain object.

```typescript
export interface MyResponse {
  field: string;
  timestamp: string;
}

export function myFunction(input?: string): MyResponse {
  return {
    field: input ?? 'default',
    timestamp: new Date().toISOString(),
  };
}
```

### 2. Route (`src/routes/<name>.ts`)

Import the service. Call it. Return `res.json(...)`. Nothing else.

```typescript
import { Router, Request, Response } from 'express';
import { myFunction } from '../services/<name>.service';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(myFunction());
});

export default router;
```

### 3. Register in `src/app.ts`

Add one line:

```typescript
import myRouter from './routes/<name>';
app.use('/<name>', myRouter);
```

### 4. Test (`tests/<name>.test.ts`)

Use supertest against the exported `app`. Cover at minimum:
- Default response (no params)
- Response with a param (if the route accepts one)
- Status code is 200
- Response body has the expected fields

```typescript
import request from 'supertest';
import app from '../src/app';

describe('GET /<name>', () => {
  it('returns default response', async () => {
    const res = await request(app).get('/<name>');
    expect(res.status).toBe(200);
    expect(res.body.<field>).toBeDefined();
  });
});
```

---

## Rules

- **Services must be pure.** No side effects, no I/O, no Express imports.
- **Routes must be thin.** Only call a service and return the result.
- **No new dependencies** unless the task explicitly requires them.
- **Do not modify existing tests** unless a task explicitly asks you to.
- **Do not modify `src/index.ts`** — it only starts the server.
- **Imports use no `.js` extension** — this project uses CommonJS via ts-jest.

---

## Commands

```bash
npm run lint   # ESLint — must pass with 0 errors
npm test       # Jest — all tests must pass
npm run build  # TypeScript compile
npm run dev    # ts-node-dev hot reload on port 4000
```

---

## Existing endpoints

| Method | Path | Service |
|--------|------|---------|
| GET | `/health` | inline in app.ts |
| GET | `/greeting` | `greeting.service.ts` → `getGreeting()` |
| GET | `/greeting/:name` | `greeting.service.ts` → `getGreeting(name)` |
