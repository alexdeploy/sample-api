// hello from claudepilot
import express from 'express';
import greetingRouter from './routes/greeting';
import buenosDiasRouter from './routes/buenos-dias';
import pruebaRouter from './routes/prueba';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/greeting', greetingRouter);
app.use('/buenos-dias', buenosDiasRouter);
app.use('/prueba', pruebaRouter);

export default app;
