import { service } from './service.js';

// Controlador para operaciones relacionadas con productos

// Obtener listado completo de productos
const getAll = async (req, res) => {
  try {
    res.json(await service.readall());
  } catch (error) {
    res.json({ status: 'error', error: error.message });
  }
};

export { getAll };
