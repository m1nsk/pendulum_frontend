import axios from 'axios'

import router from "../router";

export function initAxios() {
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (401 === error.response.status) {
      window.location.href = '/#/login';
      router.push({name: 'login'})
    } else {
      return Promise.reject(error);
    }
  });
}
