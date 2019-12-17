import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://bus-bubber.herokuapp.com/api' || 'http://localhost:8080/api',
});

export default api;
