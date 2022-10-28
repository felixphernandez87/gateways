import { service } from "./service.js";

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    res.json(await service.readone(id));
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    res.json(await service.readall());
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

const createGateway = async (req, res) => {
  try {
    const data = req.body;
    const result = await service.create(data);
    res.json(result);
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

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

const deleteGateway = async (req, res) => {
  try {
    const id = req.params.id;
    await service.delete(id);
    res.json({ status: "success", response: "Deleted successfully" });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

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
