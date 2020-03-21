const path = require('path');

const rootDir = path.join(__dirname, '../..');
const coverageDirectory = path.join(rootDir, '.coverage');
const globalSetup = path.join(__dirname, 'jest.global.setup.js');

module.exports = {
  rootDir,
  coverageDirectory,
  globalSetup,
  modulePathIgnorePatterns: ['<rootDir>[/\\\\](scripts|build|docs|public)[/\\\\]'],
  testMatch: ['<rootDir>/**/__tests__/*.test.js', '<rootDir>/test/**/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/']
};
