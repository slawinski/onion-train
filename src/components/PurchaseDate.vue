<template>
  <div>
    <div class="image">
      <img :src="image" :alt="altText" />
    </div>
    <h1>The Onion Train</h1>
    <h3>Remember when to buy your ticket!</h3>
    <label for="date">Departure date: </label>
    <input name="date" type="date" v-model="desiredDate" />
    <p>Ticket purchase date: {{ purchaseDate }} at 0h:30min</p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'PurchaseDate',
  data() {
    return {
      desiredDate: null,
      image: require('../assets/onion-train.png'),
      altText: 'logo',
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

<style>
.image img {
  width: 10%;
  height: auto;
}
</style>
