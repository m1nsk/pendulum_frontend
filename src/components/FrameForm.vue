<template>
  <div style="width: 50%; margin: 0 auto">
    <vue-form-generator :schema="schema.schema" :model="model" :options="schema.formOptions"></vue-form-generator>
    <!--<input type="submit" :disabled="disabled" @click="submitForm"/>-->

    <form id="upload" method="post" enctype="multipart/form-data">
        <input v-if="frameType == 'single'" ref="single" type="file" @change="sync"/>
        <input v-else-if="frameType == 'array'" ref="multiple" type="file" @change="sync" multiple/>
    </form>
    <img class="img_preview" v-for="item in this.src" :src="item" />
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
        },
        content: []
      }
    },
    methods: {
      selectImage (file) {
        this.file = file
        let reader = new FileReader()
        reader.onload = this.onImageLoad
        reader.readAsDataURL(file)
      },

      /**
       * Gets File image object from specified {Event}
       *
       * @param {Event} e
       */
      sync (e) {
        this.content.length = 0
        e.preventDefault()
        let arr = e.target.files
        for (let i = 0; i < arr.length; i++) {
          this.selectImage(arr[i])
        }
        // this.selectImage(e.target.files[0])
      },

      /**
       * New image load handler. Emits 'input' event
       *
       * @param {Event} e
       */
      onImageLoad (e) {
        this.content.push(e.target.result)
      }
    },
    computed: {
      /**
       * Picture src
       *
       * @return {String}
       */
      src () {
        if (this.content) {
          return this.content
        }
        return this.isEmpty ? '' : '';
      },
      frameType () {
        if (this.prevModelType !== this.model.type) {
          this.content.length = 0
          if (this.$refs.single !== undefined) {
            this.$refs.single.value = ""
          }
          if (this.$refs.multiple !== undefined) {
            this.$refs.multiple.value = ""
          }
        }
        this.prevModelType = this.model.type
        return this.model.type
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img_preview {
    width: 50px;
    height: 50px;
  }
</style>


