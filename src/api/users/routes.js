import { Router } from 'express';
import { getOne, getAll, createUser, updateUser, deleteUser } from './controllers.js';

const userRoutes = Router();

userRoutes.get('/:id', getOne);
userRoutes.get('/', getAll);
userRoutes.post('/', createUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export { userRoutes };
