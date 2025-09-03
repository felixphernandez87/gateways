import { service } from './service.js';

// Controller to obtain gateway summary report
const getGatewaySummary = async (req, res) => {
  try {
    const result = await service.gatewaySummary();
    res.json({ status: 'success', data: result });
  } catch (error) {
    res.json({ status: 'error', error: error.message });
  }
};

export { getGatewaySummary };
