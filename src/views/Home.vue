<template>
  <div>
    <date-form @onDateSelect="passDate"></date-form>
    <event-creator :dte="childData"></event-creator>
  </div>
</template>

<script>
import DateForm from '../components/DateForm.vue';
import EventCreator from '../components/EventCreator.vue';

export default {
  name: 'Home',
  components: {
    DateForm,
    EventCreator,
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

<style></style>
