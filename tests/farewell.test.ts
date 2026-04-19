import request from 'supertest';
import app from '../src/app';

describe('GET /farewell', () => {
  it('returns a farewell message', async () => {
    const res = await request(app).get('/farewell');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Goodbye, world!');
    expect(res.body.timestamp).toBeDefined();
  });
});
