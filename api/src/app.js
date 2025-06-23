const express = require('express');
const cors = require('cors');

const UserRouter = require('./routes/user.routes');

const { swaggerUi, specs } = require('./config/swagger');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/user', UserRouter);

module.exports = app;