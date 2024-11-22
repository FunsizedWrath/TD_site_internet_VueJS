<template>
  <div id="app">
    <TexteImageComponent/>
  </div>
</template>

<script>
import TexteImageComponent from './components/TexteImageComponent.vue';

export default {
  name: 'App',
  components: {
    TexteImageComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
