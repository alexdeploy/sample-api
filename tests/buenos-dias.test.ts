import request from 'supertest';
import app from '../src/app';

describe('GET /buenos-dias', () => {
  it('returns a buenos dias message', async () => {
    const res = await request(app).get('/buenos-dias');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Buenos dias!!');
  });

  it('returns a timestamp', async () => {
    const res = await request(app).get('/buenos-dias');
    expect(res.status).toBe(200);
    expect(res.body.timestamp).toBeDefined();
  });
});
