/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  preset: 'jest-preset-angular',
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@proxy/(.*)': '<rootDir>/src/app/proxy/$1',
    '@libs/(.*)': '<rootDir>/src/app/libs/$1',
  },
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/?!(.*\\.mjs$|@jsverse)'],
  testEnvironment: '@happy-dom/jest-environment',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  bail: 1,
  verbose: true,
};

module.exports = config;
