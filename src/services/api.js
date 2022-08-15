import axios from 'axios';

const api = axios.create({
    baseURL: 'https://studio-luciana-back.herokuapp.com',
});

export default api;
