import { Request, Response } from 'express';

export default [
  {
    path: '/',
    method: 'get',
    handler: [
      (req: Request, res: Response): void => {
        res.status(200).send('Hello world!');
      },
    ],
  },
];
