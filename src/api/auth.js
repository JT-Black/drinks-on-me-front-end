import axios from '../lib/api';

export const registerUser = async (user) => {
  const options = {
    method: 'POST',
    url: 'https://drinks-on-me-jtb.herokuapp.com/authentication/register/',
    data: user
  };

  const { data } = await axios.request(options);

  return data;
};

export const loginUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: 'https://drinks-on-me-jtb.herokuapp.com/authentication/login/',
    data: credentials
  };

  const { data } = await axios.request(options);
  if (data.token) {
    window.sessionStorage.setItem('token', data.token);
  } else {
    window.sessionStorage.removeItem('token');
  }
  // changed below to not just send back the message.
  return data;
};
