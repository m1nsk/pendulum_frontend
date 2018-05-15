import {client} from './client'

export function getUserList () {
  return client.get('/admin/users')
}

export function getUser (id) {
  return client.get('/admin/users/' + id)
}


export function createUser (formData) {
  return client.post('/admin', formData)
}

