import axios from 'axios'
import {initAxios} from './index'

initAxios()

export function getMessageList () {
  return axios.get('/message')
}

export function getMessage (id) {
  return axios.get('/message/' + id)
}

export function deleteMessage (id) {
  return axios.delete('/message/' + id)
}

export function createMessage (formData) {
  return axios.post('/message', formData)
}

export function editMessage (formData, id) {
  return axios.put('/message/' + id, formData)
}
