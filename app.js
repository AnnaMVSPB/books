require('@babel/register');
require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.routes');

const app = express();
const PORT = process.env.PORT || 4000;
serverConfig(app);
app.use('/', indexRouter);

app.listen(PORT, () => { console.log(`пашу как буйвол на ${PORT} порту`); });
