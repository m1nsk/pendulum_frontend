import {clientLogin} from './loginClient'
import axios from 'axios'

export function login (formData) {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  return clientLogin.post('login', 'username=' + formData.username + `&` + 'password=' + formData.password);
}

