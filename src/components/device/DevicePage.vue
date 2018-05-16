<template>
  <div>
    <h1>Device</h1>
    <router-link :to="{name: 'deviceEdit', params: {id: this.$route.params.id}}">Edit Device</router-link>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="message" slot-scope="props" :to="{name: 'messageCurrentByDeviceList', params: {id: props.row.id}}">Message</router-link>
      <router-link slot="channels" slot-scope="props" :to="{name: 'channelByDeviceList', params: {id: props.row.id}}">Channels</router-link>
      <router-link slot="user" slot-scope="props" :to="{name: 'userPage', params: {id: props.row.user.id}}">{{props.row.user.name}}</router-link>
      <router-link slot="edit" slot-scope="props" :to="{name: 'deviceEdit', params: {id: $route.params.id}}"><icon name="edit"></icon> </router-link>
      <div slot="delete" slot-scope="props" @click="onDelete"><icon name="trash-alt"></icon> </div>
    </v-client-table>
  </div>
</template>

<script>
  import {getDevice, deleteDevice} from '@/api/device'
  export default {
    name: 'Devices',
    data() {
      return {
        columns: ['name', 'serial', 'message', 'channels', 'user', 'edit', 'delete'],
        tableData: [],
        options: {
          filterByColumn: false,
          headings: {
            name: 'Name',
            serial: 'Serial',
            message: 'Message',
            channels: 'Channels',
            user: 'User',
            edit: 'Edit',
            delete: 'Delete'
          }
        }
      }
    },
    mounted: function () {
      let id = this.$route.params.id;
      let promise = getDevice(id)
      promise.then((response) => {
        this.tableData = [response.data]
      });
    },
    methods: {
      onDelete: function (event) {
        let id = this.$route.params.id;
        let promise = deleteDevice(id)
        promise.then((response) => {
          this.$router.push({name: 'deviceList'})
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
