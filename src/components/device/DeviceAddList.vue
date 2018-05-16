<template>
  <div>
    <h1>Add Device</h1>
    <router-link :to="{name: 'deviceCreate'}">Create Device</router-link>
    <v-client-table :data="tableData" :columns="columns" :options="options">
     <router-link slot="add" slot-scope="props" @click="addDevice"><icon name="fa-plus"></icon> </router-link>
    </v-client-table>
  </div>
</template>

<script>
  import {getDeviceList} from '@/api/device'
  import {addDevice} from '@/api/channel'
  export default {
    name: 'Devices',
    data() {
      return {
        columns: ['name', 'serial', 'add'],
        tableData: [],
        options: {
          filterByColumn: false,
          headings: {
            name: 'Name',
            serial: 'Serial',
            add: 'Add'
          },
        }
      }
    },
    methods: {
      addDevice() {
        let channelId = this.$route.params.channelId
        let deviceId = this.$route.params.deviceId
        let promise = addDevice(channelId, deviceId)
        promise.then((response) => {
          this.$router.push(-1)
        })
      }
    },
    created: function () {
      let promise = getDeviceList()
      promise.then((response) => {
        this.tableData = response.data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
