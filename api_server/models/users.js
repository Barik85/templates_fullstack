const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validateEmail } = require('../utils/validation');
const secrets = require('../secrets');
const RESTerror = require('../utils/rest_error');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: validateEmail,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  tokens: [{
    token: {
      type: String,
      required: true,
    },
  }],
  role: {
    type: String,
    required: true,
    default: 'client',
  }
},
{
  versionKey: false,
});

userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
      .catch((err) => console.log('bcrypt error:', err));
  }

  next();
});

userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = await jwt.sign({_id: user._id}, secrets.JWT_KEY);
  user.tokens = user.tokens.concat({token});

  await user.save();

  return token;
};

userSchema.statics.findByCredintials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new RESTerror('Invalid credentials', 401);
  console.log('user:', user);

  const isCorrectPassword = await bcrypt.compare(password, user.password)
    .catch((err) => console.log('compare error:', err));

  if (!isCorrectPassword) throw new RESTerror('Invalid credentials', 401);

  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
