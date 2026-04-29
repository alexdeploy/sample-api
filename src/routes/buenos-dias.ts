import { Router, Request, Response } from 'express';
import { getBuenosDias } from '../services/buenos-dias.service';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(getBuenosDias());
});

export default router;
