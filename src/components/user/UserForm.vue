<template>
  <div style="width: 50%; margin: 0 auto">
    <h1>Registration</h1>
    <user-form :schema="schema" :model="model" :submitFunction="submitFunction"></user-form>
  </div>
</template>

<script>
  import Form from "@/components/Form"
  import VueFormGenerator from "vue-form-generator"
  import {createUser} from '@/api/profile'
  export default {
    name: 'UserForm',
    components: {
      "user-form": Form
    },
    data () {
      return {
        submitFunction: createUser,
        model: {
          id: '',
          name: '',
          password: '',
          email: ''
        },
        schema: {
          schema: {
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "Id",
                model: "id",
                readonly: true,
                visible: false,
                placeholder: "Id",
                validator: VueFormGenerator.validators.string
              }, {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "name",
                required: true,
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


