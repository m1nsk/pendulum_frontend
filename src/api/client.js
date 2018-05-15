import {API_HOST, API_PORT} from "./config"
import axios from 'axios'
import router from '../router/index'

var baseHost = API_HOST + ':' + API_PORT
var baseURL = baseHost + '/rest/'

export const client = function () {
  let result = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json'
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

