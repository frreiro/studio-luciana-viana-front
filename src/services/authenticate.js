import api from './api.js';

export async function createUser(userData) {
    const response = await api.post('/signup', userData);
    return response.data;
}

export async function loginUser(userData) {
    const { data: token } = await api.post('/login', userData);
    return token;
}