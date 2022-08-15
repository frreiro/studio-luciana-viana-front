import api from './api.js';

const config = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
};

export async function createAssessment(data, token) {
    console.log(data);
    const response = await api.post('/assessment', data, config(token));
    return response.data;
}


export async function getAssesment(token) {
    try {
        const response = await api.get('/assessment', config(token));
        return response.data;
    } catch (e) {
        if (e.response.status === 404) return null;
    }
}

export async function updateAssessment(data, token, id) {
    const response = await api.put(`/assessment/${id}`, data, config(token));
    return response.data;
}