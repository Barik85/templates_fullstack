class RESTerror extends Error {
  constructor(message = 'fail', status = 500) {
    super(message);
    this.status = status;
  }
};

module.exports = RESTerror;
