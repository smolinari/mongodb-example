/* eslint-disable */
// eslint-disable-next-line import/no-default-export
export default {
    displayName: 'test-nest-mongoose',
    globals: {},
    testEnvironment: 'node',
    transform: {
      '^.+\\.[tj]sx?$': [
        'ts-jest',
        {
          tsconfig: '<rootDir>/tsconfig.json'
        }
      ]
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testTimeout: 10000
  }