import { Request, Response } from 'express';
import { Route } from '../../types/route';

const routes: Route[] = [
  {
    path: '/',
    method: 'get',
    handler: [
      (req: Request, res: Response): void => {
        res.status(200).render('home', { title: 'Home page' });
      },
    ],
  },
];

export default routes;
