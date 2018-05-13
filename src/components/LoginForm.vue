<template>
  <div style="width: 50%; margin: 0 auto">
    <login-form :schema="schema" :model="model" :submitFunction="submitFunction"></login-form>
  </div>
</template>

<script>
  import Form from "@/components/Form"
  import VueFormGenerator from "vue-form-generator"
  import {login} from '@/api/login'
  export default {
    name: 'LoginForm',
    components: {
      "login-form": Form
    },
    data () {
      return {
        submitFunction: login,
        model: {
          username: "",
          password: ""
        },
        schema: {
          schema: {
            fields: [{
              type: "input",
              inputType: "text",
              label: "E-mail",
              model: "username",
              required: true,
              placeholder: "username",
              validator: VueFormGenerator.validators.string
            }, {
              type: "input",
              inputType: "password",
              label: "Password",
              model: "password",
              required: true,
              validator: VueFormGenerator.validators.string
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


