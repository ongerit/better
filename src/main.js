import Vue from 'vue'
import App from './App'

Vue.use(require('vue-resource'))
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

// Custom Vue Filter
// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
Vue.filter('comma', function (v) {
  return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})
