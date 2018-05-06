<template>
  <div style="width: 50%; margin: 0 auto">
    <user-form :schema="schema" :model="model" :submitFunction="submitFunction"></user-form>
  </div>
</template>

<script>
  import Form from "../Form"
  import VueFormGenerator from "vue-form-generator"
  import {createUser} from '@/api/user'
  export default {
    name: 'UserForm',
    components: {
      "user-form": Form
    },
    data () {
      return {
        submitFunction: createUser,
        model: {
          name: "",
          password: "",
          email: ""
        },
        schema: {
          schema: {
            fields: [{
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
            }, {
              type: "input",
              inputType: "password",
              label: "Password",
              model: "password",
              min: 6,
              required: true,
              hint: "Minimum 6 characters",
              validator: VueFormGenerator.validators.string
            }, {
              type: "input",
              inputType: "email",
              label: "E-mail",
              model: "email",
              required: true,
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


