import api from './api.js';

const config = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
};

export async function createHistoric(data, token) {
    const response = await api.post('/historic', data, config(token));
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
export async function updateHistoric(data, token, id) {
    console.log(data, token, id);
    const response = await api.put(`/historic/${id}`, data, config(token));
    return response.data;
}