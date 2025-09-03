import { User } from './model.js';

const service = {
  async readall() {
    return User.find() ?? [];
  },

  async readone(id) {
    if (!id || typeof id !== 'string') throw new Error('Invalid id.');
    return User.findById(id);
  },

  async create(data) {
    if (!data.username || !data.email || !data.password)
      throw new Error('Invalid input data.');

    const newUser = new User(data);
    return newUser.save();
  },

  async update(id, data) {
    if (!id || typeof id !== 'string') throw new Error('Invalid id.');
    if (JSON.stringify(data) === '{}') throw new Error('Invalid input data.');

    const { username, email, password } = data;
    await User.findByIdAndUpdate(id, { username, email, password });
    return User.findById(id);
  },

  async delete(id) {
    if (!id || typeof id !== 'string') throw new Error('Invalid id.');
    return User.findByIdAndDelete(id);
  },
};

export { service };
