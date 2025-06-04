import { Router } from "express";

// Importamos los controladores que gestionarán cada ruta

import {
  getOne,
  getAll,
  createGateway,
  updateGateway,
  deleteGateway,
  addDevice,
  removeDevice,
} from "./controllers.js";

// Objeto Router para las rutas de gateways
const gatewayRoutes = Router();

// Endpoints CRUD básicos
gatewayRoutes.get("/:id", getOne);
gatewayRoutes.get("/", getAll);
gatewayRoutes.post("/", createGateway);
gatewayRoutes.put("/:id", updateGateway);
gatewayRoutes.delete("/:id", deleteGateway);

// Endpoints para manipular dispositivos
gatewayRoutes.put("/adddevice/:id", addDevice);
gatewayRoutes.patch("/removedevice", removeDevice);

export { gatewayRoutes };
