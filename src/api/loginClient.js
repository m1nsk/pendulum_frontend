import {API_PORT} from "./config"
import axios from 'axios'
import interceptor from './interceptor'

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
  interceptor(result)
  return result
}()

