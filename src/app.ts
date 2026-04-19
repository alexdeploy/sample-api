import express from 'express';
import greetingRouter from './routes/greeting';
import farewellRouter from './routes/farewell';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/greeting', greetingRouter);
app.use('/farewell', farewellRouter);

export default app;
