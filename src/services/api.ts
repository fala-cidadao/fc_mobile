import axios from 'axios';

const api = axios.create({
    baseURL: 'http://es-fc-backend.herokuapp.com', // http://192.168.1.3:3000 http://locahost:3000
});

export default api;
