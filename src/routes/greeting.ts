import { Router, Request, Response } from 'express';
import { getGreeting } from '../services/greeting.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const lang = req.query.lang as 'en' | 'es' | undefined;
  res.json(getGreeting(undefined, lang));
});

router.get('/:name', (req: Request, res: Response) => {
  const lang = req.query.lang as 'en' | 'es' | undefined;
  res.json(getGreeting(req.params.name, lang));
});

export default router;
