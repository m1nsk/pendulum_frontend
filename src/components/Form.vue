<template>
  <div style="width: 50%; margin: 0 auto">
    <vue-form-generator @validated="onValidated" :schema="schema.schema" :model="model" :options="schema.formOptions"></vue-form-generator>
    <input type="submit" :disabled="disabled" @click="submitForm"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueFormGenerator from "vue-form-generator"

  Vue.use(VueFormGenerator)
  export default {
    name: 'Form',
    props: ['model' ,'schema', 'submitFunction'],
    data() {
      return {
        disabled: true,
      }
    },
    methods: {
      onValidated(isValid, errors) {
        this.disabled = !isValid
      },
      submitForm() {
        let promise = this.submitFunction(this.model)
        promise.then((response) => {
          console.log('!!!!!!!!!!!!!!!!!!!!1')
          this.$router.go(-1)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
