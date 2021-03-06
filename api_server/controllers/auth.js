const jwt = require('jsonwebtoken');
const User = require('../models/users');
const secrets = require('../secrets');

const auth = async (req, res, next) => {
  try {
    const authorization = req.get('jwt-authorization');
    const token = authorization && authorization.replace('Bearer ', '');

    if (token) {
      const data = jwt.verify(token, secrets.JWT_KEY);
      const user = await User.findOne({ _id: data._id, 'tokens.token': token});

      if (user) {
        req.user = user;
        req.token = token;
      }
    }
  } catch(err) {
    next();
    return;
  }

  next();
};

module.exports = auth;
