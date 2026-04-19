import { Router, Request, Response } from 'express';
import { getGreeting } from '../services/greeting.service';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(getGreeting());
});

router.get('/:name', (req: Request, res: Response) => {
  res.json(getGreeting(req.params.name));
});

export default router;
