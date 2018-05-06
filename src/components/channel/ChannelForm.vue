<template>
  <div style="width: 50%; margin: 0 auto">
    <channel-form :schema="schema" :model="model" :submitFunction="submitFunction"></channel-form>
  </div>
</template>

<script>
  import Form from "../Form"
  import VueFormGenerator from "vue-form-generator"
  import {createChannel} from '@/api/channel'
  export default {
    name: 'ChannelForm',
    components: {
      "channel-form": Form
    },
    data () {
      return {
        submitFunction: createChannel,
        model: {
          name: ""
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
              placeholder: "Channel's name",
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


