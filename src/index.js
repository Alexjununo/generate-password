require('dotenv').config();
require('module-alias/register')

const express = require('express');

const routes = require('@src/routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
