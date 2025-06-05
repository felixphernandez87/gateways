import mongoose from 'mongoose';
import { service } from './service.js';

mongoose.connect('mongodb://127.0.0.1/gateways');

describe('gatewaySummary', () => {
  test('returns totals', async () => {
    const result = await service.gatewaySummary();
    expect(typeof result.totalGateways).toBe('number');
    expect(typeof result.totalDevices).toBe('number');
  });
});
