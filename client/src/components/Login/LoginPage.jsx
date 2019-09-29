import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { validateEmail, validatePassword } from '../../utils/validation';

const INITIAL_STATE = {
  email: {
    value: '',
    isValid: true,
  },
  password:{
    value: '',
    isValid: true,
  },
  isPasswordShown: false,
}

const LoginPage = (props) => {
  const { authenticated, loginUser, history, registerUser } = props;
  const [values, setValues] = useState(INITIAL_STATE);
  const passwordValue = values.password.value;
  const emailValue = values.email.value;
  const path = history && history.location && history.location.pathname;

  const isRegistration = path === '/register';

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  }, [authenticated]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    let isValid = true;
    if (name === 'email') isValid = validateEmail(value);
    else if (name === 'password' && isRegistration) isValid = validatePassword(value);

    setValues({
      ...values,
      [name]: {
        value,
        isValid,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordValue || !values.password.isValid || !emailValue || !values.email.isValid) {
      return;
    }

    if (isRegistration) {
      registerUser({ email: emailValue, password: passwordValue });
    } else {
      loginUser({ email: emailValue, password: passwordValue });
    }
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
            value={emailValue}
            name="email"
            className={values.email.isValid ? 'form-control' : 'form-control is-invalid'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={values.isPasswordShown ? 'text' : 'password'}
            onChange={handleInputChange}
            value={passwordValue}
            name="password"
            className={values.password.isValid ? 'form-control' : 'form-control is-invalid'}
          />
          <div className="text-right">
            <button type="button" onClick={toggleSowPassword} className="text-muted right">
              {values.isPasswordShown ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {isRegistration ? 'Create Account' : 'Login'}
        </button>
      </div>
    </form>
  );
};

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.object,
  }).isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default LoginPage;
