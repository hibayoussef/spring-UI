// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

import axios from './axiosConfig.js';
// create new axios instance
const api = axios.create({
  withCredentials: true,
  credentials: 'same-origin',
})

export default api
