<template>
  <div>
    <h1>Messages</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="user" slot-scope="props" :to="{name: 'userPage', params: {id: props.row.user.id}}">{{props.row.user.name}}</router-link>
    </v-client-table>
  </div>
</template>

<script>
  import {getMessageList} from '@/api/message'
  export default {
    name: 'Messages',
    data() {
      return {
        columns: ['message', 'user'],
        tableData: [],
        options: {
          filterByColumn: false,
          headings: {
            message: 'Message',
            user: 'User',
          },
        }
      }
    },
    created: function () {
      let promise = getMessageList()
      promise.then((response) => {
        this.tableData = response.data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
