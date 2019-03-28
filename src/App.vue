<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <router-view />
    <disclaimer></disclaimer>
  </div>
</template>

<script>
import Disclaimer from './components/Disclaimer.vue';

export default {
  name: 'app',
  components: {
    Disclaimer,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3 200;
  margin-top: 60px;
}
</style>
