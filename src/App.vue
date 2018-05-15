<template>
  <div id="app">
    <menu-bar/>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
  import MenuBar from '@/components/MenuBar'
  export default {
    name: 'App',
    components: {
      'menu-bar': MenuBar
    },
    data() {
      return {
        rawMenuData: {
          item1: {
            id: 'users',
            name: 'Users',

            // Элемент меню как кликабельная ссылка,
            // из-за указания этого свойства
            uri: '/user',
            vueRouter: true
          }
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
