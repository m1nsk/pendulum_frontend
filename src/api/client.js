import {API_HOST, API_PORT} from "./config"
import axios from 'axios'
import interceptor from './interceptor'

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
  interceptor(result)
  return result
}()

