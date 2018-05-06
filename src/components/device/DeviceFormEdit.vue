<template>
  <div style="width: 50%; margin: 0 auto">
    <device-form :schema="schema" :model="model" :submitFunction="submitFunction"></device-form>
  </div>
</template>

<script>
  import Form from "@/components/Form"
  import VueFormGenerator from "vue-form-generator"
  import {editDevice, getDevice} from '@/api/device'
  export default {
    name: 'DeviceForm',
    components: {
      "device-form": Form
    },
    data () {
      return {
        submitFunction: function (model) {
           return editDevice(model, this.$route.params.id)
        },
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
              },{
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
              },{
                type: "input",
                inputType: "text",
                label: "Serial",
                model: "serial",
                readonly: false,
                featured: true,
                required: true,
                disabled: false,
                placeholder: "Device's serial"
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
      let promise = getDevice(id)
      promise.then((response) => {
        this.model = response.data;
        console.log(this.model)
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


