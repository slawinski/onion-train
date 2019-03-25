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
@media (min-width: 320px) {
  #app {
    padding: 0px 5px 0px 5px;
  }
}
@media (min-width: 480px) {
  #app {
    padding: 0px 10px 0px 10px;
  }
}
@media (min-width: 600px) {
  #app {
    padding: 0px 100px 0px 100px;
  }
}
@media (min-width: 801px) {
  #app {
    padding: 0px 200px 0px 200px;
  }
}
@media (min-width: 1025px) {
  #app {
    padding: 0px 300px 0px 300px;
  }
}
@media (min-width: 1281px) {
  #app {
    padding: 0px 400px 0px 400px;
  }
}
</style>
