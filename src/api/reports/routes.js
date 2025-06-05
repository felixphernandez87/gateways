import { Router } from 'express';
import { showReport } from './controllers.js';

const reportRoutes = Router();

reportRoutes.get('/', showReport);

export { reportRoutes };
