import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import DateFilter from './filters/date'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vuelidate from 'vuelidate'

import 'nprogress/nprogress.css'

Vue.use(Vuelidate)
Vue.filter('date', DateFilter)
Vue.config.productionTip = false
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
