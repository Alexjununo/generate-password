const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');

const passwordController = require('@src/controllers/passwordController');

const apiRouter = Router();

apiRouter
    .use(methodOverride('X-HTTP-Method-Override'))
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
    .use('/password', passwordController.generatePassword);

module.exports = apiRouter;


