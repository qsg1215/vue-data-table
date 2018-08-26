import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

import VueDataTable from './src/index.js'

export default VueDataTable
Vue.use(VueDataTable)

import App from './App.vue'

new Vue({
  el: '#app1',
  render: h => h(App)
})
