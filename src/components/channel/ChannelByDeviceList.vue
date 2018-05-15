<template>
  <div>
    <h1>Channels</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="message" slot-scope="props" :to="{name: 'messagePage', params: {id: props.row.message.id}}">Message</router-link>
      <router-link slot="messages" slot-scope="props" :to="{name: 'messageList', params: {id: props.row.id}}">Messages</router-link>
      <router-link slot="user" slot-scope="props" :to="{name: 'userPage', params: {id: props.row.user.id}}">{{props.row.user.name}}</router-link>
      <router-link slot="devices" slot-scope="props" :to="{name: 'deviceByChannelList', params: {id: props.row.id}}">Devices</router-link>
      <router-link slot="edit" slot-scope="props" :to="{name: 'channelPage', params: {id: props.row.id}}"><icon name="eye"></icon> </router-link>
    </v-client-table>
  </div>
</template>

<script>
  import {getChannelByDeviceList} from '@/api/channel'
  export default {
    name: 'Channels',
    data() {
      return {
        columns: ['id', 'name', 'message', 'messages', 'user', 'devices', 'edit'],
        tableData: [],
        options: {
          filterByColumn: false,
          headings: {
            id: 'Id',
            name: 'Name',
            message: 'Message',
            messages: 'Messages',
            user: 'User',
            devices: 'Devices',
            edit: 'Edit'
          },
        }
      }
    },
    created: function () {
      let id = this.$route.params.id
      let promise = getChannelByDeviceList(id)
      promise.then((response) => {
        this.tableData = response.data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
