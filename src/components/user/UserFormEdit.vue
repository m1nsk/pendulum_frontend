<template>
  <div style="width: 50%; margin: 0 auto">
    <user-form :schema="schema" :model="model" :submitFunction="submitFunction"></user-form>
  </div>
</template>

<script>
  import Form from "@/components/Form"
  import VueFormGenerator from "vue-form-generator"
  import {editUser, getUser} from '@/api/user'
  export default {
    name: 'UserForm',
    components: {
      "user-form": Form
    },
    data () {
      return {
        submitFunction: editUser,
        model: {},
        schema: {
          schema: {
            fields: [
              {
                type: "input",
                inputType: "hidden",
                label: "",
                model: "id",
                readonly: true,
                featured: true,
                required: true,
                disabled: true
              },
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "name",
                readonly: false,
                featured: true,
                required: true,
                disabled: false,
                placeholder: "User's name",
                validator: VueFormGenerator.validators.string
              },
              {
                type: "input",
                inputType: "email",
                label: "E-mail",
                model: "email",
                placeholder: "User's e-mail address",
                validator: VueFormGenerator.validators.email
              }]
          },
          formOptions: {
            validateAfterLoad: true,
            validateAfterChanged: true
          }
        }
      }
    },
    mounted: function () {
      let id = this.$route.params.id;
      let promise = getUser(id)
      promise.then((response) => {
        this.model = response.data
      })
        .catch(e => {
          // this.$router.push({name: 'error'})
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


