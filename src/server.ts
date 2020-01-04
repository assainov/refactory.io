import express from 'express';
import middleware from './middleware';
import routes from './services';
import { applyMiddleware, applyRoutes } from './utils';

export const router = express();

router.set('views', `${__dirname}/../views`);
router.set('view engine', 'pug');
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const port = process.env.NODE_ENV === 'test' ? 3001 : 3000;

const server = router.listen(port, () => {
  console.info(`Server is running at port ${port}...`);
  if (process.env.NODE_ENV === 'development') {
    console.info(`BrowserSync is listening at port 3000`);
  }
});

export default server;
