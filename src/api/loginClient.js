import {API_PORT} from "./config"
import axios from 'axios'
import router from '../router/index'

let baseHost = 'http://localhost' + ':' + API_PORT
let baseURL = baseHost


export const clientLogin = function () {
  let result = axios.create({
    baseURL: baseURL,
    headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
  })
  result.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (401 === error.response.status) {
      router.push({name: 'login'})
    } else {
      return Promise.reject(error);
    }
  })
  return result
}()

