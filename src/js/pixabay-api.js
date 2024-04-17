import axios from "axios"

axios.defaults.baseURL = 'https://pixabay.com'
const API_KEY = '43393189-93860efddddd16832e4d2b268'

export function requestServer(searchWord, numberPage) {
    const searchParams = {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: API_KEY,
        q: searchWord,
        page: numberPage,
        per_page: 15
    }

    return axios.get('/api/?', { params: searchParams })
}