<template>
  <add-to-calendar
    title="Train tickets!"
    location="Intercity.pl"
    :start="calcDate"
    :end="calcDate"
    details="Be ready to buy your tickets exactly on this date!"
    inline-template
  >
    <div>
      <google-calendar id="google-calendar"> Add to Google calendar </google-calendar>
    </div>
  </add-to-calendar>
</template>

<script>
export default {
  name: 'EventCreator',
  props: {
    dte: {
      type: String,
    },
  },
  data() {
    return {
      calcDate: '',
    };
  },
  watch: {
    dte: function() {
      this.calcDate = this.dte._d;
    },
  },
};
</script>

<style></style>
