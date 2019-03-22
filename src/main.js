import Vue from 'vue';
import App from './App.vue';

import AddToCalendar from 'vue-add-to-calendar';

Vue.use(AddToCalendar);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
