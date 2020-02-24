import { Request, Response } from 'express';
import { Route } from '../../types/route';

function sayHi(): void {
  console.log('Hello world');
}

const routes: Route[] = [
  {
    path: '/input-detailed',
    method: 'get',
    handler: [
      (req: Request, res: Response): void => {
        res.status(200).render('input-detailed', {
          title: 'Input Detailed page',
          someFunc: sayHi,
        });
      },
    ],
  },
];

export default routes;
