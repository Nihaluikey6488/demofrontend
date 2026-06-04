import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://demobackend-revl.onrender.com",

});

export default axiosInstance;