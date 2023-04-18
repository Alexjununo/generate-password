const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

const passwordController = require('@src/controllers/passwordController');

const routes = express();

routes.use(cors());
routes.use(bodyParser.json());
routes.use(compression());

routes.get('/' , (req, res) => res.json({ message: 'Service is running', status: 200 }));
routes.post('/password', passwordController.generatePassword);

module.exports = routes;


