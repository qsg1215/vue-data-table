/**
 * Created by virus_zhh on 2017/9/29.
 */
import VueElTable from './vue-data-table.vue'

VueElTable.install = function(Vue){
  Vue.component(VueElTable.name, VueElTable)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueElTable);
}

export default VueElTable