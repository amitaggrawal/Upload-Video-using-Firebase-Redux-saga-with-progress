import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8000/",
});

// instance.defaults.headers.common['Authorization'] = ""
export default instance;

