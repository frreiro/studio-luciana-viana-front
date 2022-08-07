import api from './api.js';



export async function getUserNameAndEmail(token) {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    const response = await api.get('/user', config);
    return response.data;
}