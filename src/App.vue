<template>
  <div id="app">
    <date-form></date-form>
    <add-to-calendar></add-to-calendar>
    <disclaimer></disclaimer>
  </div>
</template>

<script>
import DateForm from './components/DateForm.vue';
import Disclaimer from './components/Disclaimer.vue';
import AddToCalendar from './components/AddToCalendar.vue';

export default {
  name: 'app',
  components: {
    DateForm,
    AddToCalendar,
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
