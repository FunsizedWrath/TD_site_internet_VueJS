<template>
  <div id="app">
    <NavigationComponent/>
    <TexteImageComponent/>
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue';
import TexteImageComponent from './components/TexteImageComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
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
