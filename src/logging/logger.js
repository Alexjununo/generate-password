const log4js = require('log4js');

const logger = log4js.getLogger();

module.exports = {
    'debug': (message) => logger.debug(message),
    'info': (message) => logger.info(message),
    'warn': (message) => logger.warn(message),
    'error': (message) => logger.error(message),
};
