import { service } from './service.js';

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    res.json(await service.readone(id));
  } catch (error) {
    res.json({ status: 'error', error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    res.json(await service.readall());
  } catch (error) {
    res.json({ status: 'error', error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const result = await service.create(data);
    res.json(result);
  } catch (error) {
    res.json({ status: 'error', error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await service.update(id, data);
    res.json({ status: 'success', data: result });
  } catch (error) {
    res.json({ status: 'error', error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await service.delete(id);
    res.json({ status: 'success', response: 'Deleted successfully' });
  } catch (error) {
    res.json({ status: 'error', error: error.message });
  }
};

export { getOne, getAll, createUser, updateUser, deleteUser };
