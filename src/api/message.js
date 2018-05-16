import {client} from './client'


export function getMessageList () {
  return client.get('/message')
}

export function getMessageByChannelList (channelId) {
  return client.get('/message/channel/' + channelId)
}

export function getCurrentMessageByDevice (deviceId) {
  return client.get('/message/device/' + deviceId)
}

export function getMessage (id) {
  return client.get('/message/' + id)
}

export function deleteMessage (id) {
  return client.delete('/message/' + id)
}

export function createMessage (formData) {
  return client.post('/message', formData)
}

export function editMessage (formData, id) {
  return client.put('/message/' + id, formData)
}
