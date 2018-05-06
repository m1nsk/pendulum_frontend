<template>
  <div>
    <h1>Message</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <router-link slot="user" slot-scope="props" :to="{name: 'userPage', params: {id: props.row.user.id}}">{{props.row.user.name}}</router-link>
    </v-client-table>
  </div>
</template>

<script>
  import {getMessage, deleteMessage} from '@/api/message'
  export default {
    name: 'Messages',
    data() {
      return {
        columns: ['message', 'user'],
        tableData: [],
        options: {
          filterByColumn: false,
          headings: {
            message: 'message',
            user: 'User'
          }
        }
      }
    },
    mounted: function () {
      let id = this.$route.params.id;
      let promise = getMessage(id)
      promise.then((response) => {
        this.tableData = [response.data]
      });
    },
    methods: {
      onDelete: function (event) {
        let id = this.$route.params.id;
        let promise = deleteMessage(id)
        promise.then((response) => {
          this.$router.push({name: 'messageList'})
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
