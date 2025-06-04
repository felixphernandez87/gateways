import mongoose from "mongoose";

// Esquema de datos para los dispositivos asociados a un Gateway

const deviceSchema = new mongoose.Schema({
  uid: Number,
  vendor: String,
  date_created: String,
  status: String,
});

// Esquema principal de Gateway
const gatewaySchema = new mongoose.Schema({
  name: String,
  ip: String,
  devices: [deviceSchema],
});

const Gateway = mongoose.model("Gateway", gatewaySchema);

export { Gateway };
