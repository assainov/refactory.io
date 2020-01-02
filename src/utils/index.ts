import { Router } from 'express';
import { Route } from '../types/route';

type Middleware = (router: Router) => void;

export const applyMiddleware = (
  middleware: Middleware[],
  router: Router,
): void => {
  for (const m of middleware) {
    m(router);
  }
};

export const applyRoutes = (routes: Route[], router: Router): void => {
  for (const route of routes) {
    const { path, method, handler } = route;
    (router as any)[method](path, handler); /* eslint-disable-line */
  }
};
