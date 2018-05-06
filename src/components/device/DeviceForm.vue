<template>
  <div style="width: 50%; margin: 0 auto">
    <device-form :schema="schema" :model="model" :submitFunction="submitFunction"></device-form>
  </div>
</template>

<script>
  import Form from "../Form"
  import VueFormGenerator from "vue-form-generator"
  import {createDevice} from '@/api/device'
  export default {
    name: 'DeviceForm',
    components: {
      "device-form": Form
    },
    data () {
      return {
        submitFunction: createDevice,
        model: {
          name: "",
          serial: ""
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
              placeholder: "Device's name",
              validator: VueFormGenerator.validators.string
            }, {
              type: "input",
              inputType: "text",
              label: "Serial",
              model: "serial",
              readonly: false,
              featured: true,
              required: true,
              disabled: false,
              placeholder: "Device's name",
              validator: VueFormGenerator.validators.string
            },]
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


