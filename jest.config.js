process.env.TZ = 'GMT';
module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.svg$': './fileTransformer.js',
  },
  moduleDirectories: ['node_modules', 'src'],
};
