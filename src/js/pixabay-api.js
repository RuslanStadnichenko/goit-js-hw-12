import axios from 'axios';

const API_KEY = '43393189-93860efddddd16832e4d2b268';
axios.defaults.baseURL = 'https://pixabay.com/api/';
    
export function requestServer(query, numberPage ) {
    const params = {
        key: API_KEY,
        q: query,
        orientation: 'horizontal',
        image_type: 'photo',
        safesearch: true,
        page: numberPage,
        per_page: 15
    };
    return axios.get('/api/?', { param: params });
};