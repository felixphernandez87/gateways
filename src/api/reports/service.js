import { Gateway } from '../gateways/model.js';

// Service that creates basic summary reports
const service = {
  async gatewaySummary() {
    const gateways = await Gateway.find();
    const totalGateways = gateways.length;
    const totalDevices = gateways.reduce(
      (sum, gw) => sum + (gw.devices ? gw.devices.length : 0),
      0
    );
    return { totalGateways, totalDevices };
  },
};

export { service };
