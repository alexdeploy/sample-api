// hello from claudepilot
import express from 'express';
import greetingRouter from './routes/greeting';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/greeting', greetingRouter);

export default app;
