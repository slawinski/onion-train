<template>
  <div id="app">
    <PurchaseDate></PurchaseDate>
  </div>
</template>

<script>
import PurchaseDate from './components/PurchaseDate.vue';

export default {
  name: 'app',
  components: {
    PurchaseDate,
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
