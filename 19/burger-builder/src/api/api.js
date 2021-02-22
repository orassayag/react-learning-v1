import axios from 'axios';

const api = axios.create({
    baseURL: 'https://burger-builder-84921.firebaseio.com/'
});

export default api;
