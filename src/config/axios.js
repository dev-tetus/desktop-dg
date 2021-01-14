const axios = require("axios");
const keys = require("../keys/index");

const axiosInstance = axios.create({
  baseURL: keys.BACKEND.API_URL,
  withCredentials: true,
});
export default axiosInstance;
