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

export async function getHistoric(token) {
    try {
        const response = await api.get('/historic', config(token));
        return response.data;
    } catch (e) {
        if (e.response.status === 404) return null;
    }
}