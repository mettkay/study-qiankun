const packageName = require('./package.json').name;

module.exports = {
  webpack: (config) => {
    config.output.library = `${packageName}-[name]`
    config.output.libraryTarget = 'umd'
    config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`
    return config
  }

};