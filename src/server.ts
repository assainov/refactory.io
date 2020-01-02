import express from 'express';
import middleware from './middleware';
import routes from './services';
import { applyMiddleware, applyRoutes } from './utils';

export const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const { PORT = 3000 } = process.env;

console.log('hi from server');

const server = router.listen(PORT, () => {
  console.info(`Server is running at port ${PORT}...`);
});

export default server;
