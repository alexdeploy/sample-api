import request from 'supertest';
import app from '../src/app';

describe('GET /prueba', () => {
  it('returns default response', async () => {
    const res = await request(app).get('/prueba');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('esto es una prueba');
    expect(res.body.timestamp).toBeDefined();
  });

  it('returns response with custom message', async () => {
    const res = await request(app).get('/prueba/hola');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('hola');
    expect(res.body.timestamp).toBeDefined();
  });
});
