import { Product } from './model.js';

// Servicio sencillo que obtiene productos de la base de datos

const service = {
  async readall() {
    // Devuelve todos los productos disponibles
    return Product.find() ?? [];
  },
};

export { service };
