import {client} from './client'


export function getDeviceList () {
  return client.get('/device')
}

export function getDevice (id) {
  return client.get('/device/' + id)
}

export function deleteDevice (id) {
  return client.delete('/device/' + id)
}

export function createDevice (formData) {
  return client.post('/device', formData)
}

export function editDevice (formData, id) {
  return client.put('/device/' + id, formData)
}
