<template>
  <add-to-calendar
    title="Tickets!"
    location="intercity.pl"
    :start="new Date()"
    :end="new Date(new Date().setDate(new Date().getDate() + 1))"
    details="Go on the internets and buy cheap tickets."
    inline-template
  >
    <div>
      <google-calendar id="google-calendar">
        <i class="fa fa-google"></i> Add to Google calendar
      </google-calendar>
    </div>
  </add-to-calendar>
</template>

<script>
export default {};
</script>

<style></style>
