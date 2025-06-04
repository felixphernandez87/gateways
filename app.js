// Dependencias de terceros
import express from 'express';
import logger from 'morgan';
import cors from 'cors';

// Middlewares personalizados
import { error404Handler, errorHandler } from './src/middleware/index.js';

// Enrutador principal de la aplicación
import { routes } from './src/routes/routes.js';

// Configuración y conexión a base de datos
import './src/config/index.js';
import './src/services/mongodb.js';

// Inicialización de la aplicación Express
const app = express();

// Registro de middlewares globales
// Habilita CORS para todas las peticiones
app.use(cors());
// Permite recibir JSON y formularios con un tamaño máximo de 30mb
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
// Registra cada solicitud en consola
app.use(logger('combined'));

// Rutas principales de la API
app.use('/', routes);

// Manejadores de error genéricos
app.use(error404Handler, errorHandler);

export default app;
