import axios from 'axios'
import {initAxios} from './index'

initAxios()

export function getUserList () {
  return axios.get('/admin/users')
}

export function getUser (id) {
  return axios.get('/admin/users/' + id)
}

export function deleteUser (id) {
  return axios.delete('/admin/users/' + id)
}

export function createUser (formData) {
  return axios.post('/profile', formData)
}

export function editUser (formData) {
  return axios.put('/profile/', formData)
}
