import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-84921.firebaseio.com/'
});

export default instance;