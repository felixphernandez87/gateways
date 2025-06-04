import createError from 'http-errors';

// Códigos de estado HTTP utilizados en los manejadores
const NOT_FOUND = 404;
const SERVER_ERROR = 500;

// Middleware para generar un error 404 cuando una ruta no existe
export const error404Handler = (req, res, next) => {
        next(createError(NOT_FOUND));
};

// Middleware que maneja cualquier error de la aplicación
export const errorHandler = (err, req, res) => {
        // Información que se mostrará al cliente
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // Enviar la respuesta de error
        res.status(err.status || SERVER_ERROR);
        res.send({
                status: 'error',
                errors: err.message,
        });
};
