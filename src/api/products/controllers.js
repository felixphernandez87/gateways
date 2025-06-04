import { service } from './service.js';

const getAll = async (req, res) => {
  try {
    res.json(await service.readall());
  } catch (error) {
    res.json({ status: 'error', error: error.message });
  }
};

export { getAll };
