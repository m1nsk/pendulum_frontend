<template>
  <div>
    <h1>Profile</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="edit" slot-scope="props" :to="{name: 'userEdit', params: {id: props.row.id}}"><icon name="edit"></icon> </router-link>
      <div slot="delete" slot-scope="props" @click="onDelete"><icon name="trash-alt"></icon></div>
    </v-client-table>
  </div>
</template>

<script>
  import {getUserProfile, deleteUser} from '@/api/profile'
  export default {
    name: 'Users',
    data() {
      return {
        columns: ['id', 'name', 'email', 'registered', 'roles', 'edit', 'delete'],
        tableData: [],
        options: {
          filterable: false,
          headings: {
            id: 'Id',
            name: 'Name',
            email: 'Email',
            registered: 'Registered',
            roles: 'Roles',
            edit: 'Edit',
            delete: 'Delete'
          },
        }
      }
    },
    mounted: function () {
      let promise = getUserProfile()
      promise.then((response) => {
        this.tableData = [response.data]
      });
    },
    methods: {
      onDelete: function (event) {
        let promise = deleteUser()
        promise.then((response) => {
          this.$router.push({name: 'userList'})
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
