import { Router } from 'express';
import { getGatewaySummary } from './controllers.js';

const reportRoutes = Router();

// Summary of gateways and total devices
reportRoutes.get('/gateways', getGatewaySummary);

export { reportRoutes };
