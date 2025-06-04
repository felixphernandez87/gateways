import mongoose from 'mongoose';

// Conexión simple a la base de datos MongoDB

mongoose
	.connect('mongodb://127.0.0.1/gateways')
	.then(() => console.log('Connection to database successfully'))
	.catch((e) => console.log(e));
