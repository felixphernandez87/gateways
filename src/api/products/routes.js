import { Router } from 'express';
import { getAll } from './controllers.js';

const productRoutes = Router();

productRoutes.get('/', getAll);

export { productRoutes };
