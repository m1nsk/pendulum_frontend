<template>
  <div style="width: 50%; margin: 0 auto">
    <device-form :schema="schema" :model="model"></device-form>
    <device-form :schema="addFormSchema" :model="addFormModel"></device-form>
  </div>
</template>

<script>
  import Form from "@/components/Form"
  import VueFormGenerator from "vue-form-generator"
  export default {
    name: 'DeviceForm',
    components: {
      "device-form": Form
    },
    data () {
      return {
        model: {
          type: "",
          next_type: "",
          next_value: "",
        },
        schema: {
          schema: {
            fields: [{
              type: "select",
              label: "Type",
              model: "type",
              required: true,
              values: [
                "single",
                "array",
                "frame"
              ]
            }, {
              type: "select",
              label: "Next_type",
              model: "next_type",
              required: true,
              values: [
                "time",
                "cycle"
              ]
            },{
              type: "input",
              inputType: "number",
              label: "Next_value",
              model: "next_value"
            }
            ]
          },
          formOptions: {
            validateAfterLoad: true,
            validateAfterChanged: true
          }
        }
      }
    },
    computed: {
      addFormSchema() {
        if (this.model.type == "array") {
          return this.schema
        }
      },
      addFormModel() {
        if (this.model.type == "array") {
          return this.model
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


