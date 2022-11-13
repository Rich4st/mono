import axios from 'axios';

let request = axios.create({
  baseURL: '/'
}) 

export default request;
