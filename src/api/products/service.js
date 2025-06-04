import { Product } from './model.js';

const service = {
  async readall() {
    return Product.find() ?? [];
  },
};

export { service };
