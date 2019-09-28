import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

export const requestTemplatesList = token =>
  axios.get('/templates', {
    headers: {
      'Content-Type': 'application/json',
      'JWT-Authorization': `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

export const requestLogin = credentials =>
  axios.post('/users/login', credentials);
