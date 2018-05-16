<template>
  <div>
    <h1>User</h1>
    <router-link :to="{name: 'userEdit'}">Edit User</router-link>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="edit" slot-scope="props" :to="{name: 'userEdit', params: {id: $route.params.id}}"><icon name="edit"></icon> </router-link>
      <div slot="delete" slot-scope="props" @click="onDelete"><icon name="trash-alt"></icon> </div>
    </v-client-table>
  </div>
</template>

<script>
  import {getUser, deleteUser} from '@/api/profile'
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
      let id = this.$route.params.id;
      let promise = getUser(id)
      promise.then((response) => {
        this.tableData = [response.data]
      });
    },
    methods: {
      onDelete: function (event) {
        let id = this.$route.params.id;
        let promise = deleteUser(id)
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
