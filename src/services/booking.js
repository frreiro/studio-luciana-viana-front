import api from './api.js';

const config = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
};

export async function getUserNameAndEmail(token) {
    try {
        const response = await api.get('/user', config(token));
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

