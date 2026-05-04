import { Router, Request, Response } from 'express';
import { getPrueba } from '../services/prueba.service';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(getPrueba());
});

router.get('/:message', (req: Request, res: Response) => {
  res.json(getPrueba(req.params.message));
});

export default router;
