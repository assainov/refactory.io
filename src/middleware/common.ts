import { static as expressStatic, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());
};

export const handleStaticFiles = (router: Router) =>
  router.use(expressStatic(`${__dirname}/../public`));

export const handleCompression = (router: Router) => router.use(compression());
