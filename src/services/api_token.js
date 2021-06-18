import Axios from 'axios';

export const URL_local = "http://127.0.0.1:8000/api"; 
export const URL_web = "http://education.cifrangola.co.ao/api";

const api_token = Axios.create({
baseURL : URL_local,
headers:{
    Authorization: 'bearer ' + window.localStorage.getItem('token')
  }
});

export default api_token;