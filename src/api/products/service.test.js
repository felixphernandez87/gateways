import mongoose from 'mongoose';
import { Product } from './model.js';
import { service } from './service.js';

mongoose.connect('mongodb://127.0.0.1/gateways');

describe('products service', () => {
  test('readall returns array', async () => {
    const result = await service.readall();
    expect(result instanceof Array).toBeTruthy();
  });
});
