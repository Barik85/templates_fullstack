const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
require('./utils/db');
const userRouter = require('./routes/users');
const templatesRouter = require('./routes/templates');
const RESTerror = require('./utils/rest_error');

app.use((req, res, next) => {
  console.log(`${req.method} => ${req.url}, ${new Date().toString()}`);

  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users/', userRouter);
app.use('/templates/', templatesRouter);

app.use((req, res, next) => {
  const err = new RESTerror('Not found!', 404);

  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.log(err);
  if (process.env.NODE_ENV === 'development') {
    res.json({
      err: err.message,
      stack: err.stack,
    });
  } else {
    res.json({
      err: err.message,
    });
  }
});

app.listen(config.port, () => console.log(`Server started at port ${config.port}`));
