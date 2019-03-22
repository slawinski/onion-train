<template>
  <div id="app">
    <date-form @onDateSelect="passDate"></date-form>
    <event-creator :dte="childData"></event-creator>
    <disclaimer></disclaimer>
  </div>
</template>

<script>
import DateForm from './components/DateForm.vue';
import Disclaimer from './components/Disclaimer.vue';
import EventCreator from './components/EventCreator.vue';

export default {
  name: 'app',
  components: {
    DateForm,
    EventCreator,
    Disclaimer,
  },
  data: function() {
    return {
      childData: '',
    };
  },
  methods: {
    passDate(variable) {
      this.childData = variable;
    },
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
