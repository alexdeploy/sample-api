import { Router, Request, Response } from 'express';
import { getFarewell } from '../services/farewell.service';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(getFarewell());
});

export default router;
