const { NODE_ENV = 'development' } = process.env;

const config = require(`./${NODE_ENV}.json`);

module.exports = config;
