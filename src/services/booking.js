import api from './api.js';

const config = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
};

export async function getUserNameAndEmail(token) {
    const response = await api.get('/user', config(token));
    return response.data;
}

