<template>
  <div>
    <h1>Devices</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="channels" slot-scope="props" :to="{name: 'channelByDeviceList', params: {id: props.row.id}}">Channels</router-link>
      <router-link slot="user" slot-scope="props" :to="{name: 'userPage', params: {id: props.row.user.id}}">{{props.row.user.name}}</router-link>
      <router-link slot="edit" slot-scope="props" :to="{name: 'devicePage', params: {id: props.row.id}}"><icon name="eye"></icon> </router-link>
    </v-client-table>
  </div>
</template>

<script>
  import {getDeviceByChannelList} from '@/api/device'
  export default {
    name: 'Devices',
    data() {
      return {
        columns: ['name', 'serial', 'channels', 'user', 'edit'],
        tableData: [],
        options: {
          filterByColumn: false,
          headings: {
            name: 'Name',
            serial: 'Serial',
            channels: 'Channels',
            user: 'User',
            edit: 'Edit'
          },
        }
      }
    },
    created: function () {
      let id = this.$route.params.id
      let promise = getDeviceByChannelList(id)
      promise.then((response) => {
        this.tableData = response.data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
