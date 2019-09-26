const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUsers } = require('../controllers/users');
const auth = require('../controllers/auth');

router.get('/', auth, getUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.delete('/logout');

module.exports = router;
