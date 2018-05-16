import {client} from './client'
import {registrationClient} from './registrationClient'

export function getUserList () {
  return client.get('/profile/')
}

export function getUser (id) {
  return client.get('/profile/' + id)
}

export function getUserProfile () {
  return client.get('/profile/profile')
}

export function deleteUser () {
  return client.delete('/profile/')
}

export function createUser (formData) {
  return registrationClient.post('/registration', formData)
}

export function editUser (formData) {
  return client.put('/profile/', formData)
}
