<template>
  <div>
    <h1>Channel page</h1>
    <router-link :to="{name: 'channelEdit', params: {id: this.$route.params.id}}">Edit Channel</router-link>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="message" v-if="props.row.message !== undefined" slot-scope="props" :to="{name: 'messagePage', params: {id: props.row.message.id}}">Message</router-link>
      <router-link slot="messages" slot-scope="props" :to="{name: 'messageList', params: {id: props.row.id}}">Messages</router-link>
      <router-link slot="user" slot-scope="props" :to="{name: 'userPage', params: {id: props.row.user.id}}">{{props.row.user.name}}</router-link>
      <router-link slot="devices" slot-scope="props" :to="{name: 'deviceByChannelList', params: {id: props.row.id}}">Devices</router-link>
      <router-link slot="edit" slot-scope="props" :to="{name: 'channelEdit', params: {id: props.row.id}}"><icon name="edit"></icon> </router-link>
      <div slot="delete" slot-scope="props" @click="onDelete"><icon name="trash-alt"></icon> </div>
    </v-client-table>
  </div>
</template>

<script>
  import {getChannel, deleteChannel} from '@/api/channel'
  export default {
    name: 'Channels',
    data() {
      return {
        columns: ['id', 'name', 'message', 'messages', 'user', 'devices', 'edit', 'delete'],
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
            edit: 'Edit',
            delete: 'Delete'
          },
        }
      }
    },
    mounted: function () {
      let id = this.$route.params.id;
      let promise = getChannel(id)
      promise.then((response) => {
        this.tableData = [response.data]
      });
    },
    methods: {
      onDelete: function (event) {
        let id = this.$route.params.id;
        let promise = deleteChannel(id)
        promise.then((response) => {
          this.$router.push({name: 'channelList'})
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
