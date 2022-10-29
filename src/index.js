require('dotenv').config();
const express = require('express');
const fs = require('fs');

const BACKUP_PATH = `${__dirname}/../backup/index.json`;
fs.writeFileSync(BACKUP_PATH, '[]', 'utf-8');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
