import axios from 'axios';

const api = axios.create({
    baseURL: 'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/'
});

export default api;