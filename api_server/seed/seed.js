const User = require('../models/users');

User.create({
  email: 'baryloaleks@gmail.com',
  password: 123456,
  role: 'admin',
});

console.log('admin user created!');
