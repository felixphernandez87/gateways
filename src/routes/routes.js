import { Router } from "express";

import { gatewayRoutes } from "../api/gateways/routes.js";
import { authRoutes } from "../api/auth/routes.js";

const routes = Router();

routes.use("/api/gateways", gatewayRoutes);
routes.use("/api/auth", authRoutes);
routes.all("*", (req, res) => {
  res.sendStatus("404");
});

export { routes };
