import axios from 'axios';

const axiosInstance = axios.create();  //new instance for axios

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
// axiosInstance.defaults.baseURL = 'http://localhost:6000'


axiosInstance.defaults.withCredentials = true;     // allow to all cookies for send req

export default axiosInstance;