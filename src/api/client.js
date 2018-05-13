import {API_HOST, API_PORT} from "./config"
import axios from 'axios'


var baseHost = API_HOST + ':' + API_PORT
var baseURL = baseHost + '/rest/'

import {initAxios} from './index'

export const client = function () {
  initAxios()
  return axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}()

