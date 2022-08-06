import api from './api.js';

export async function createUser(userData) {
    const response = await api.post('/signup', userData);
    return response.data;
}