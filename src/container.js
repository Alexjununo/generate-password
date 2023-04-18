const { createContainer } = require('awilix');

const Server = require('./server');
const Router = require('./routes');
const logger = require('./logging/logger');
const container = createContainer();

module.exports = {
    configureContainer: () => {
        container.register({
            server: asClass(Server).singleton(),
            router: asFunction(Router),
            logger: asFunction(logger).singleton(),
            container: asValue(container),
        })
        .loadModules([
            'src/client/*.js',
            'src/controllers/*.js',
            'src/factories/*.js',
            'src/generator/*.js',
            'src/operations/*.js',
            'src/schemas/*.js',
        ],
        {
            formatName: 'camelCase',
            resolverOptions: {
                injectionMode: InjectionMode.PROXY
            }
        });
    }
};
