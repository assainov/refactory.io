jest.mock('express');
import express, { Router } from 'express';

import { applyMiddleware, applyRoutes } from '.';
import { Route } from '../types/route';

describe('applyMiddleware utility', () => {
  const router = express();

  it('should call middleware 2 times', () => {
    const mockMiddleware = jest.fn();
    const middlewares = [mockMiddleware, mockMiddleware];

    applyMiddleware(middlewares, router);

    expect(mockMiddleware).toHaveBeenCalledTimes(2);
  });

  it('should be called with router', () => {
    const mockMiddleware = jest.fn();
    const middleware = [mockMiddleware];

    applyMiddleware(middleware, router);

    expect(mockMiddleware).toHaveBeenCalledWith(router);
  });
});

describe('applyRoutes utility', () => {
  it('should call method with handler', () => {
    const mockGet = jest.fn();
    const expressMock = ({
      get: mockGet,
    } as unknown) as Router;

    const route: Route = {
      path: '/',
      method: 'get',
      handler: (): void => {
        return;
      },
    };

    applyRoutes([route], expressMock);

    expect(mockGet).toHaveBeenCalledWith(route.path, route.handler);
  });
});
