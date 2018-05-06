import axios from 'axios'

import { API_HOST, API_PORT } from '../api/config'

export const baseHost = API_HOST + ':' + API_PORT
export const baseURL = baseHost + '/rest/'

export function initAxios() {
  axios.defaults.baseURL = baseURL
  axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
}
