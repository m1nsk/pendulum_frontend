<template>
  <div>
    <h1>Users</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="edit" slot-scope="props" :to="{name: 'adminPage', params: {id: props.row.id}}"><icon name="eye"></icon> </router-link>
    </v-client-table>
  </div>
</template>

<script>
  import {getUserList} from '@/api/admin'
  export default {
    name: 'Users',
    data() {
      return {
        columns: ['id', 'name', 'email', 'password', 'registered', 'roles', 'edit'],
        tableData: [],
        options: {
          filterByColumn: false,
          headings: {
            id: 'Id',
            name: 'Name',
            email: 'Email',
            password: 'Password',
            registered: 'Registered',
            roles: 'Roles',
            edit: 'Edit'
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
