<template>
  <div>
    <h1>Users</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
    </v-client-table>
  </div>
</template>

<script>
  import {getUserList} from '@/api/profile'
  export default {
    name: 'Users',
    data() {
      return {
        columns: ['id', 'name', 'email', 'registered', 'roles'],
        tableData: [],
        options: {
          filterByColumn: false,
          headings: {
            id: 'Id',
            name: 'Name',
            email: 'Email',
            registered: 'Registered',
            roles: 'Roles'
          },
        }
      }
    },
    created: function () {
      let promise = getUserList()
      promise.then((response) => {
        this.tableData = response.data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
