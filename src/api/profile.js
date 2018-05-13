import {client} from './client'

export function getUserList () {
  return client.get('/profile/')
}

export function getUser (id) {
  return client.get('/profile/' + id)
}

export function deleteUser (id) {
  return client.delete('/profile/' + id)
}

export function createUser (formData) {
  return client.post('/profile', formData)
}

export function editUser (formData) {
  return client.put('/profile/', formData)
}
