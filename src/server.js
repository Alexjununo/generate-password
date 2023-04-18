require('dotenv').config();
require('module-alias/register')

const { scopePerRequest } = require('awilix-express');
const express = require('express');
const helmet = require('helmet');
const https = require('https');

class Server {
    constructor({ router, logger, container }) {
        this.logger = logger;
        this.express = express();
        this.express.use(helmet());
        this.express.use(helmet.noCache());
        this.express.use(scopePerRequest(container));
        this.express.use(router);
    }

    start() {
        return new Promise(resolve => {
            const server = https.createServer(this.express)
                .listen(process.env.PORT, () => {
                    const { port } = server.address();
                    this.logger.info(`[p ${process.pid}] Listening at port ${port}`);
                    resolve();
                });
        });
    }
}

module.exports = Server;
