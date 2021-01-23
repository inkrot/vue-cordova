// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// JS import
import Vue from 'vue';
import VueOnsen from 'vue-onsenui'

import App from './App'
import router from './router'

Vue.use(VueOnsen);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
