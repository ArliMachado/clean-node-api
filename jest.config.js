module.exports = {

  roots: ['<rootDir>/src'],
  // collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
