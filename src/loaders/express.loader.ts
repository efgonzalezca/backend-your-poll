import cors from 'cors';
import { Application } from 'express';

export const expressLoader = (app: Application) => {
  app.use(cors({origin: '*'}));
  app.get('/', (_req, res) => {
    res.json({
      message: 'Test route',
    })
    .status(200).end()
  });
}