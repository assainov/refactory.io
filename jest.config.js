module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts',
  ] /* test only ts files */,
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
};
