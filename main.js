import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

import VJstree from './src/index.js'
Vue.use(VJstree)

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
