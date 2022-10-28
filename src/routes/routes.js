import { Router } from "express";

import { gatewayRoutes } from "../api/gateways/routes.js";

const routes = Router();

routes.use("/api/gateways", gatewayRoutes);
routes.all("*", (req, res) => {
  res.sendStatus("404");
});

export { routes };
