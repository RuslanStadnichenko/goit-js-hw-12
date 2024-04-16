export function requestServer(query) {
    const API_KEY = '43393189-93860efddddd16832e4d2b268';
    const SERV_URL = 'https://pixabay.com/api/';

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        orientation: 'horizontal',
        image_type: 'photo',
        safesearch: true,
    });
    return fetch(`${SERV_URL}?${params}`).then(result => {
        if (!result.ok) {
            throw new Error(result.status);
        }
        return result.json();
    })
};