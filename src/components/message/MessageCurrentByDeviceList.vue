<template>
  <div>
    <h1>Current Message</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="user" slot-scope="props" :to="{name: 'userPage', params: {id: props.row.user.id}}">{{props.row.user.name}}</router-link>
    </v-client-table>
  </div>
</template>

<script>
  import {getCurrentMessageByDevice} from '@/api/message'
  export default {
    name: 'Current Message',
    data() {
      return {
        columns: ['message', 'date', 'user'],
        tableData: [],
        options: {
          filterByColumn: false,
          headings: {
            message: 'Message',
            date: 'Date',
            user: 'User',
          },
        }
      }
    },
    created: function () {
      let id = this.$route.params.id;
      let promise = getCurrentMessageByDevice(id)
      promise.then((response) => {
        this.tableData = [response.data]
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
