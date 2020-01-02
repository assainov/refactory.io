import { Router, Request, Response, NextFunction } from 'express';

type Middleware = (router: Router) => void;

export const applyMiddleware = (
  middleware: Middleware[],
  router: Router,
): void => {
  for (const m of middleware) {
    m(router);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void> | void;

export type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router): void => {
  for (const route of routes) {
    const { path, method, handler } = route;
    (router as any)[method](path, handler);
  }
};
