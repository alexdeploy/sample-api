import request from 'supertest';
import app from '../src/app';

describe('GET /greeting', () => {
  it('returns a greeting for world', async () => {
    const res = await request(app).get('/greeting');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, world!');
    expect(res.body.timestamp).toBeDefined();
  });

  it('returns a personalized greeting', async () => {
    const res = await request(app).get('/greeting/Alex');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Alex!');
  });
});

describe('GET /health', () => {
  it('returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
