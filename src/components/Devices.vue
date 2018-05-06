<template>
  <div>
    <h1>Devices</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <div slot="edit" slot-scope="props" @click="onEdit"><icon name="edit"></icon> </div>
      <div slot="delete" slot-scope="props" @click="onDelete"><icon name="trash-alt"></icon> </div>
    </v-client-table>
  </div>
</template>

<script>
  import {getDeviceList} from '@/api/device'
  export default {
    name: 'Devices',
    data() {
      return {
        columns: ['id', 'serial', 'edit', 'delete'],
        tableData: [],
        options: {
          headings: {
            id: 'Id',
            serial: 'serial',
            edit: 'Edit',
            delete: 'Delete'
          }
        }
      }
    },
    created: function () {
      let promise = getDeviceList()
      promise.then((response) => {
        console.log(response.data)
        this.tableData = response.data
      })
    },
    methods: {
      onEdit: function (event) {
        console.log('!!!!!!!!!!!!!!!!!!')
      },
      onDelete: function (event) {
        console.log('&&&&&&')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
