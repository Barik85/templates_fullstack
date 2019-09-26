const secrets = require('../secrets');
const mongoose = require('mongoose');

mongoose.connect(
  secrets.DB_connect_url,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => console.log('DB connected.')
);
