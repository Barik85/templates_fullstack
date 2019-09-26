import React, { useState } from 'react'
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  email: '',
  password:'',
  isPasswordShown: false,
}

const LoginPage = () => {
  const [values, setValues] = useState(INITIAL_STATE);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleSowPassword = () => {
    setValues({ ...values, isPasswordShown: !values.isPasswordShown});
  };

  return (
    <form className="row justify-content-center" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={handleInputChange}
            value={values.email}
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={values.isPasswordShown ? 'text' : 'password'}
            onChange={handleInputChange}
            value={values.password}
            name="password"
            className="form-control"
          />
          <div className="text-right">
            <button type="button" onClick={toggleSowPassword} className="text-muted right">
              {values.isPasswordShown ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default LoginPage;
