import {client} from './client'

export function getUserList () {
  return client.get('/admin/users')
}

export function getUser (id) {
  return client.get('/admin/users/' + id)
}

export function deleteUser (id) {
  return client.delete('/admin/users/' + id)
}

export function createUser (formData) {
  return client.post('/admin', formData)
}

export function editUser (formData) {
  return client.put('/admin/', formData)
}
