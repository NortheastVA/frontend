import axios from 'axios';

const sessionJwt = window.sessionStorage.getItem('token');

// Placeholder, add dev url
const getUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.northeastva.org/';
  }
  return 'https://api.dev.northeastva.org/';
};

export default axios.create({
  baseURL: getUrl(),
  withCredentials: true,
  headers: {
    Authorization: `bearer ${sessionJwt}`,
  },
});
