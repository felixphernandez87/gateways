import { Router } from "express";

import {
  getOne,
  getAll,
  createGateway,
  updateGateway,
  deleteGateway,
  addDevice,
  removeDevice,
} from "./controllers.js";

const gatewayRoutes = Router();

gatewayRoutes.get("/:id", getOne);
gatewayRoutes.get("/", getAll);
gatewayRoutes.post("/", createGateway);
gatewayRoutes.put("/:id", updateGateway);
gatewayRoutes.delete("/:id", deleteGateway);
gatewayRoutes.put("/adddevice/:id", addDevice);
gatewayRoutes.patch("/removedevice", removeDevice);

export { gatewayRoutes };
