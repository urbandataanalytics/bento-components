module.exports = {
  testEnvironment: 'jsdom',
  coverageReporters: ['text'],
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>//config/__mocks__/styleMock.js'
  },
  setupFiles: ['raf/polyfill', './config/enzymeConfig', './config/registerContext'],
  setupFilesAfterEnv: ['./config/jestSetupFramework'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
