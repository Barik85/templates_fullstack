import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

export const requestTemplatesList = token =>
  axios.get('/templates', {
    headers: {
      'Content-Type': 'application/json',
      'JWT-Authorization': token ? `Bearer ${token}` : '',
      Accept: 'application/json',
    },
  });

export const requestTemplate = ({ id, token }) =>
  axios.get(`/templates/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'JWT-Authorization': token ? `Bearer ${token}` : '',
      Accept: 'application/json',
    },
  });

export const requestRegister = credentials =>
  axios.post('/users', credentials);

export const requestLogin = credentials =>
  axios.post('/users/login', credentials);

export const requestLogout = token =>
  axios.delete('/users/logout', {
    headers: {
      'Content-Type': 'application/json',
      'JWT-Authorization': `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
