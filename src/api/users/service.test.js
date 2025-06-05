import mongoose from 'mongoose';

import { User } from './model.js';
import { service } from './service.js';

mongoose.connect('mongodb://127.0.0.1/gateways');

describe('create', () => {
  test('create user properly', async () => {
    const result = await service.create({
      username: 'john',
      email: 'john@example.com',
      password: '1234',
    });
    expect(result instanceof User).toBeTruthy();
  });

  test('entry an empty object', async () => {
    await expect(service.create({})).rejects.toThrow('Invalid input data.');
  });
});

describe('getAll', () => {
  test('get users properly', async () => {
    const result = await service.readall();
    expect(result instanceof Array).toBeTruthy();
  });
});

describe('getOne', () => {
  test('type not string id', async () => {
    await expect(service.readone(123)).rejects.toThrow('Invalid id.');
  });
});

describe('update', () => {
  test('get wrong id', async () => {
    await expect(service.update(234234, { username: 'a' })).rejects.toThrow('Invalid id.');
  });

  test('get wrong data', async () => {
    await expect(service.update('asdasdasd', {})).rejects.toThrow('Invalid input data.');
  });
});

describe('delete', () => {
  test('type not string id', async () => {
    await expect(service.delete(123)).rejects.toThrow('Invalid id.');
  });
});
