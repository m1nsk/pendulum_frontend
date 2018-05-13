<template>
  <div style="width: 50%; margin: 0 auto">
    <message-form :schema="schema" :model="model" :submitFunction="submitFunction"></message-form>
  </div>
</template>

<script>
  import Form from "@/components/Form"
  import VueFormGenerator from "vue-form-generator"
  import {createMessage} from '@/api/message'
  export default {
    name: 'MessageForm',
    components: {
      "message-form": Form
    },
    data () {
      return {
        submitFunction: (model) => {
          model.channelId = this.$route.params.id
          console.log(model.channelId)
          return createMessage(model)
        },
        model: {},
        schema: {
          schema: {
            fields: [{
              type: "input",
              inputType: "text",
              label: "Message",
              model: "message",
              readonly: false,
              featured: true,
              required: true,
              disabled: false,
              placeholder: "Message",
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


