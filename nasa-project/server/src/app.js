const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router.js');

const app = express();

const allowedOrigins = [
    //'http://localhost:8000',
    'http://localhost:3000'

  ];

  app.use(cors({
    origin: allowedOrigins,
  }));

app.use(express.json());

app.use(planetsRouter);

module.exports = app;