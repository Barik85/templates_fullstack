const validator = require('validator');
const RESTerror = require('../utils/rest_error');

const validateEmail = (email) => {
  if (!validator.isEmail(email)) throw new RESTerror('Invalid Email', 422);
};

module.exports = { validateEmail };
