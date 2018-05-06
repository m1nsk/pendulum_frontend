import axios from 'axios'
import {initAxios} from './index'

initAxios()

export function getChannelList () {
  return axios.get('/channel')
}

export function getChannel (id) {
  return axios.get('/channel/' + id)
}

export function deleteChannel (id) {
  return axios.delete('/channel/' + id)
}

export function createChannel (formData) {
  return axios.post('/channel', formData)
}

export function editChannel (formData, id) {
  return axios.put('/channel/' + id, formData)
}
