import axios from '../lib/api';

export const getUserById = async (id) => {
  const options = {
    method: 'GET',
    url: `https://drinks-on-me-jtb.herokuapp.com/users/${id}`
  };

  const { data } = await axios.request(options);

  return data;
};

export const getUsers = async () => {
  const options = {
    method: 'GET',
    url: 'https://drinks-on-me-jtb.herokuapp.com/users/'
  };

  const { data } = await axios.request(options);

  return data;
};

export const getPurchases = async () => {
  const options = {
    method: 'GET',
    url: 'https://drinks-on-me-jtb.herokuapp.com/purchases/'
  };

  const { data } = await axios.request(options);

  return data;
};

export const getTransfers = async () => {
  const options = {
    method: 'GET',
    url: 'https://drinks-on-me-jtb.herokuapp.com/transfers/'
  };

  const { data } = await axios.request(options);

  return data;
};

export const transfer = async (transferDetails) => {
  const options = {
    method: 'POST',
    url: 'https://drinks-on-me-jtb.herokuapp.com/transfers/transfer/',
    data: transferDetails,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

export const purchase = async (purchaseDetails) => {
  const options = {
    method: 'POST',
    url: 'https://drinks-on-me-jtb.herokuapp.com/purchases/purchase/',
    data: purchaseDetails
  };

  const { data } = await axios.request(options);

  return data;
};

export const topup = async (topupDetails) => {
  const options = {
    method: 'PUT',
    'Content-Type': 'application/json',
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    },
    url: 'https://drinks-on-me-jtb.herokuapp.com/users/topup/',
    data: JSON.stringify(topupDetails)
  };

  const { data } = await axios.request(options);

  console.log(data);
  return data;
};
