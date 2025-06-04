import { Gateway } from "./model.js";
import { validateIP } from "../../utils/validateIP.js";

// Servicio encargado de manejar la lógica de negocio relacionada con los Gateways

const service = {
  async readall() {
    // Obtiene todos los gateways almacenados en la base de datos
    return Gateway.find() ?? [];
  },

  async readone(id) {
    // Devuelve un gateway por su identificador
    if (!id || typeof id !== "string") throw new Error("Invalid id.");
    return Gateway.findById(id);
  },

  async create(data) {
    // Crea un nuevo gateway a partir de la información recibida
    if (!data.name || !data.ip) throw new Error("Invalid input data.");
    if (JSON.stringify(data) === "{}") throw new Error("Invalid input data.");
    if (!validateIP(data.ip)) throw new Error("Invalid ip address.");

    const newGateway = new Gateway(data);
    return newGateway.save();
  },

  async update(id, data) {
    // Actualiza los datos básicos de un gateway
    if (!id || typeof id !== "string") throw new Error("Invalid id.");
    if (JSON.stringify(data) === "{}") throw new Error("Invalid input data.");
    if (!validateIP(data.ip)) throw new Error("Invalid ip address.");

    const { name, ip } = data;
    await Gateway.findByIdAndUpdate(id, { name, ip });
    return Gateway.findById(id);
  },

  async delete(id) {
    // Elimina un gateway existente por id
    if (!id || typeof id !== "string") throw new Error("Invalid id.");

    return Gateway.findByIdAndDelete(id);
  },

  async addDevice(gatewayId, vendor, status = "online") {
    // Agrega un dispositivo al gateway especificado
    if (!gatewayId || typeof gatewayId !== "string")
      throw new Error("Invalid input data");
    if (!vendor || typeof vendor !== "string")
      throw new Error("Invalid input data");
    if (status.toLowerCase() !== "online" && status.toLowerCase() !== "offline")
      throw new Error("Invalid input data");

    const gateway = await Gateway.findById(gatewayId);

    if (!gateway) throw new Error("Gateway id not found");
    if (gateway.devices.length === 10)
      throw new Error("Gateway device limit excedeed (10)");

    // Se crea la estructura de nuevo dispositivo
    const newDevice = {
      uid: new Date().getTime(),
      vendor,
      date_created: new Date().toLocaleDateString(),
      status,
    };

    gateway.devices.push(newDevice);

    await Gateway.findByIdAndUpdate(gatewayId, gateway);
    return Gateway.findById(gatewayId);
  },

  async removeDevice(gatewayId, deviceUid) {
    // Elimina un dispositivo específico de un gateway
    if (!gatewayId || typeof gatewayId !== "string")
      throw new Error("Invalid input data");
    if (!deviceUid || parseInt(deviceUid) === NaN)
      throw new Error("Invalid input data");

    const gateway = await Gateway.findById(gatewayId);

    if (!gateway) throw new Error("Gateway id not found");

    const newDevices = gateway.devices.filter((dev) => dev.uid != deviceUid);

    if (gateway.devices.length === newDevices.length)
      throw new Error("Device uid not found in gateway");

    gateway.devices = newDevices;

    await Gateway.findByIdAndUpdate(gatewayId, gateway);
    return Gateway.findById(gatewayId);
  },
};

export { service };
