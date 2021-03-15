module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!(@polkadot|@babel/runtime/helpers/esm/))']
};
