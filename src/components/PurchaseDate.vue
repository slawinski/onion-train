<template>
  <div>
    <h1>Train ticket reminder</h1>
    <label for="date">Departure date: </label>
    <input name="date" type="date" v-model="desiredDate" />
    <p>Ticket purchase date: {{ purchaseDate }}</p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      desiredDate: null,
    };
  },
  computed: {
    purchaseDate: function() {
      return moment(this.desiredDate)
        .subtract(30, 'days')
        .format('DD-MMM-YYYY');
    },
  },
};
</script>

<style></style>
