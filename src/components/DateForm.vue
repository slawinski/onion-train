<template>
  <div>
    <div class="image">
      <img :src="image" :alt="altText" />
    </div>
    <h1>The Onion Train</h1>
    <h3>Remember when to buy your tickets on the cheap!</h3>
    <label for="date">Select desired departure date: </label>
    <input name="date" type="date" v-model="desiredDate" />
    <p>Ticket purchase date: {{ purchaseDate }}</p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DateForm',
  data() {
    return {
      desiredDate: null,
      image: require('../assets/onion-train.png'),
      altText: 'logo',
    };
  },
  computed: {
    purchaseDate: function() {
      let date = moment(this.desiredDate)
        .subtract(30, 'days')
        .add(30, 'minutes');
      this.$emit('onDateSelect', date);
      return date;
    },
  },
};
</script>

<style>
.image img {
  min-width: 150px;
  margin-top: 20px;
  width: 10%;
  height: auto;
}
</style>
