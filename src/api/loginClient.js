import {API_HOST, API_PORT} from "./config"
import axios from 'axios'
import {initAxios} from './index';

let baseHost = 'http://localhost' + ':' + API_PORT
let baseURL = baseHost


export const clientLogin = function () {
  initAxios()
  return axios.create({
    baseURL: baseURL,
    headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
  })
}()

