const express = require('express');
const cors = require('cors');

const UserRouter = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', UserRouter);

module.exports = app;