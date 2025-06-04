import { Router } from 'express';
import { getAll } from './controllers.js';

// Rutas asociadas al recurso de productos

const productRoutes = Router();

// Listado de productos
productRoutes.get('/', getAll);

export { productRoutes };
