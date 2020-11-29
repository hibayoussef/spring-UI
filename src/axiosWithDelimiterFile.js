import axios from './axiosConfig.js';
import axios from 'axios'

const MAX_REQUESTS_COUNT = 10
const INTERVAL_MS = 10
let PENDING_REQUESTS = 0

// create new axios instance
const api = axios.create({
  withCredentials: true,
  credentials: 'same-origin',
})

/**
 * Axios Request Interceptor
 */
api.interceptors.request.use(function (config) {
  return new Promise((resolve) => {
    NProgress.start();
    console.log('request interceptors:', PENDING_REQUESTS);
    let interval = setInterval(() => {
      if (PENDING_REQUESTS < MAX_REQUESTS_COUNT) {
        PENDING_REQUESTS++
        clearInterval(interval)
        resolve(config)
      }
    }, INTERVAL_MS)
  })
})

/**
 * Axios Response Interceptor
 */



api.interceptors.response.use(function (response) {
  // console.log('response interceptors:', PENDING_REQUESTS)
  PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1)
  return Promise.resolve(response)
}, function (error) {
  PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1)
  return Promise.reject(error)
})






import {
  app
} from './main'
api.interceptors.response.use(
  (res) => {
    NProgress.done();
    if (app) app.$store.commit("setSpinner", false);
    switch (res.status) {
      // case 200: {
      // 	success(res.data.msg, "Success!")
      // 	break;
      // }
      case 201: {
        success(res.data.msg, "Created!")
        break;
      }
      case 203: {
        success(res.data.msg, "Updated!")
        break;
      }
      case 204: {
        success(res.data.msg, "Deleted!")
        break;
      }
    }
    return Promise.resolve(res);
  },
  (err) => {
    NProgress.done();
    const res = err.response;
    if (app)
      app.$store.commit("setSpinner", false);

    switch (res.status) {
      case 401: {
        let originalRequest = err.config;

        if (res.config.url.endsWith('/token')) {
          console.log('logging out!')
          app.$store.commit('logout')
          break;
        }
        let refresh_token = localStorage.getItem('refreshToken')
        let baseURL = originalRequest.baseURL;
        if (baseURL[baseURL.length - 1] != '/')
          baseURL = baseURL + '/';

        return api
          .post(`${baseURL}auth/token`, {
            token: refresh_token
          })
          .then(result => {
            // if (result && result.data) {
            localStorage.removeItem('token')
            app.$store.commit('setToken', result.data.token)

            if (result.data.refresh_token != undefined) {
              localStorage.removeItem('refreshToken')
              app.$store.commit('setRefreshToken', result.data.refresh_token)
            }

            api.defaults.headers.common.Authorization = `Bearer ${result.data.token}`
            originalRequest.headers['Authorization'] = `Bearer ${result.data.token}`;
            return api.request(originalRequest);
            // }
          })
          .catch(err => {
            console.log('Invalid Token')
            console.log('logging out!')
            app.$store.commit('logout')
          })

      }
      case 400:
      case 418: {
        error(res.data.msg, "Invalid Data")
        break;
      }
      case 403: {
        error(res.data.msg, "Forbidden")
        break;
      }
      case 404: {
        error(res.data.msg, "Not Found!")
        break;
      }
      case 410: {
        error(res.data.msg, "Duplicated Email")
        break;
      }
      case 411: {
        error(res.data.msg, "Duplicated Phone Number")
        break;
      }
      case 412: {
        error(res.data.msg, "Duplicated Entry")
        break;
      }
      case 419: {
        warning(res.data.msg, "Invalid Operation")
        break;
      }
      case 500: {
        error('Please Try again later')
        break;
      }
    }
    return Promise.reject(res);
  })


function success(text, title = "Success") {
  if (app)

    app.$notify({
      title,
      message: text ? text : 'All Done',
      timeout: 3000,
      icon: 'tim-icons icon-bell-55',
      horizontalAlign: 'right',
      verticalAlign: 'top',
      type: 'success'
    });
}

function error(text, title = "Error") {
  if (app)

    app.$notify({
      title,
      message: text ? text : 'Error',
      timeout: 3000,
      icon: 'tim-icons icon-bell-55',
      horizontalAlign: 'right',
      verticalAlign: 'top',
      type: 'danger'
    });
}
function warning(text, title = "warning") {
  if (app)

    app.$notify({
      title,
      message: text ? text : 'warning',
      timeout: 3000,
      icon: 'tim-icons icon-bell-55',
      horizontalAlign: 'right',
      verticalAlign: 'top',
      type: 'warning'
    });
}


export default api
