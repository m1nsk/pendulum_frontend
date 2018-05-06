import axios from 'axios'
import {initAxios} from './index'

initAxios()

export function getDeviceList () {
  return axios.get('/device')
}

export function getDevice (id) {
  return axios.get('/device/' + id)
}

export function deleteDevice (id) {
  return axios.delete('/device/' + id)
}

export function createDevice (formData) {
  return axios.post('/device', formData)
}

export function editDevice (formData, id) {
  return axios.put('/device/' + id, formData)
}
