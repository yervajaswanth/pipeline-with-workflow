const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

describe('User Controller', () => {
  it('should get all users', async () => {
    await User.create({ name: 'John Doe', email: 'john@example.com' });
    
    const res = await request(app).get('/users');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.users.length).toBe(1);
    expect(res.body.data.users[0].name).toBe('John Doe');
    expect(res.body.data.users[0].email).toBe('john@example.com');
  });
});
