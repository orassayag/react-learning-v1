/* import axios from 'axios';

const api = axios.create({
    baseURL: 'https://burger-builder-84921.firebaseio.com/'
});

export default api;
 */
/* import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancelRequest;
const api = axios.create({
    baseURL: 'https://burger-builder-84921.firebaseio.com/',
    CancelToken: new CancelToken(function(cancel) {
        cancelRequest = cancel;
    })
});

export { api, cancelRequest, CancelToken }; */

import axios from 'axios';

const cancelToken = axios.CancelToken;
const api = axios.create({
    baseURL: 'https://burger-builder-84921.firebaseio.com/'
});

export { api, cancelToken };