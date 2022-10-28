import express from 'express';
import logger from 'morgan';
import { error404Handler, errorHandler } from './src/middleware/index.js';
import cors from 'cors';
import { routes } from './src/routes/routes.js';
import './src/config/index.js';
import './src/services/mongodb.js';

// Initializations
const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(logger('combined'));

// Routes
app.use('/', routes);

// Error handlers
app.use(error404Handler, errorHandler);

export default app;
