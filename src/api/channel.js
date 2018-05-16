import {client} from './client'


export function getChannelList () {
  return client.get('/channel')
}

export function getChannelByDeviceList (deviceId) {
  return client.get('/channel/device/' + deviceId)
}

export function addDevice (channelId, deviceId) {
  return client.put('/channel/'+ channelId + '/device/' + deviceId)
}

export function getChannel (id) {
  return client.get('/channel/' + id)
}

export function deleteChannel (id) {
  return client.delete('/channel/' + id)
}

export function createChannel (formData) {
  return client.post('/channel', formData)
}

export function editChannel (formData, id) {
  return client.put('/channel/' + id, formData)
}
