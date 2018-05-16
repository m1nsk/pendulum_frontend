<template>
  <div style="width: 50%; margin: 0 auto">
    <channel-form :schema="schema" :model="model" :submitFunction="submitFunction"></channel-form>
  </div>
</template>

<script>
  import Form from "@/components/Form"
  import VueFormGenerator from "vue-form-generator"
  import {editChannel, getChannel} from '@/api/channel'
  export default {
    name: 'ChannelForm',
    components: {
      "channel-form": Form
    },
    data () {
      return {
        submitFunction: function (model) {
           return editChannel(model, this.$route.params.id)
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
    },
    created: function () {
      let id = this.$route.params.id;
      let promise = getChannel(id)
      promise.then((response) => {
        this.model = response.data;
        console.log(this.model)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


