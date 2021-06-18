import Axios from 'axios';

export const URL_local = "http://127.0.0.1:8000/api"; 
export const URL_web = "";

const api = Axios.create({
baseURL : URL_local,

});

export default api;