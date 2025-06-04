import { service } from "./service.js";

// Controladores HTTP para la gestión de gateways

// Obtener un gateway por su id
const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    res.json(await service.readone(id));
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

// Listar todos los gateways
const getAll = async (req, res) => {
  try {
    res.json(await service.readall());
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

// Crear un nuevo gateway
const createGateway = async (req, res) => {
  try {
    const data = req.body;
    const result = await service.create(data);
    res.json(result);
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

// Actualizar un gateway existente
const updateGateway = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await service.update(id, data);
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

// Eliminar un gateway por id
const deleteGateway = async (req, res) => {
  try {
    const id = req.params.id;
    await service.delete(id);
    res.json({ status: "success", response: "Deleted successfully" });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

// Añadir un dispositivo a un gateway
const addDevice = async (req, res) => {
  try {
    const gatewayId = req.params.id;
    const { vendor, status } = req.body;
    const result = await service.addDevice(gatewayId, vendor, status);
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

// Eliminar un dispositivo de un gateway
const removeDevice = async (req, res) => {
  try {
    const { gatewayId, deviceUid } = req.body;
    const result = await service.removeDevice(gatewayId, deviceUid);
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

export {
  getOne,
  getAll,
  createGateway,
  updateGateway,
  deleteGateway,
  addDevice,
  removeDevice,
};
