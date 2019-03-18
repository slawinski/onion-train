<template>
  <div id="app">
    <PurchaseDate></PurchaseDate>
    <Disclaimer></Disclaimer>
  </div>
</template>

<script>
import PurchaseDate from './components/PurchaseDate.vue';
import Disclaimer from './components/Disclaimer.vue';

export default {
  name: 'app',
  components: {
    PurchaseDate,
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
