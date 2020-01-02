import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleStaticFiles,
} from './common';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleStaticFiles,
];
