import { Router } from "express";

// Importamos los módulos de rutas de cada recurso
import { gatewayRoutes } from "../api/gateways/routes.js";
import { authRoutes } from "../api/auth/routes.js";
import { productRoutes } from "../api/products/routes.js";

// Objeto Router principal que agrupa todas las rutas
const routes = Router();

// Rutas para manejar gateways
routes.use("/api/gateways", gatewayRoutes);
// Ruta de autenticación
routes.use("/api/auth", authRoutes);
// Endpoints de productos
routes.use("/api/products", productRoutes);
routes.all("*", (req, res) => {
  res.sendStatus("404");
});

export { routes };
