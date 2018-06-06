import axios from 'axios';

const sessionJwt = window.sessionStorage.getItem('token');

// Placeholder, add dev url
const getUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.northeastva.org/';
  }
  return 'http://api.northeastva.devel/';
};

export default axios.create({
  baseURL: getUrl(),
  headers: {
    Authorization: `bearer ${sessionJwt}`
  }
});
