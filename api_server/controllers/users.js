const User = require('../models/users');

const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const existUser = await User.findOne({ email });
      if (existUser) {
        res
          .status(422)
          .send({error: "user already exist."});
      } else {
        const user = new User({ email, password });
        await user.save();
        const token = await user.generateAuthToken();

        const responseUser = {
          email: user.email,
          id: user._id,
          role: user.role,
        };

        res.status(201).send({
          user: responseUser,
          token,
        });
      }
    } else {
      res
        .status(422)
        .send({ error: 'Unprocessable entity!'});
    }
  } catch(err) {
    res.status(401).send(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredintials(email, password);

    if (!user) {
      return res
        .status(422)
        .send({ error: 'email or password is wrong!'})
    }

    const token = await user.generateAuthToken();

    const responseUser = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    res.status(201).send({
      user: responseUser,
      token,
    });

  } catch (err) {
    res.status(err.status || 500).send({error: err.message || 'fail'});
  }
};

const getUsers = async (req, res, next) => {
  const { user } = req;

  if (user && user.role === 'admin') {
    const usersList = await User.find({});
    res.status(200).send(usersList);
  } else {
    res.status(403).send({ error: 'Forbidden'});
  }
};

const logoutUser = async (req, res, next) => {
  try {
    const { user } = req;

    if (user) {
      user.tokens = user.tokens.filter((token) => token.token !== req.token);
      await user.save();
      res.status(204).send();
    } else {
      res.status(403).send({ error: 'Forbidden'});
    }
  } catch(err) {
    res.status(500).send(err);
  }
};

module.exports = { createUser, loginUser, getUsers, logoutUser };
