import { static as expressStatic, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

export const handleCors = (router: Router): void => {
  router.use(cors({ credentials: true, origin: true }));
};

export const handleBodyRequestParsing = (router: Router): void => {
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());
};

export const handleStaticFiles = (router: Router): void => {
  router.use(expressStatic(`${__dirname}/../public`));
};

export const handleCompression = (router: Router): void => {
  router.use(compression());
};
