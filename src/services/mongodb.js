import mongoose from 'mongoose';

mongoose
	.connect('mongodb://127.0.0.1/gateways')
	.then(() => console.log('Connection to database successfully'))
	.catch((e) => console.log(e));
