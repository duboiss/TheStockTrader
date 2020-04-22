import Vue from 'vue'
import App from './App.vue'
import {filters} from './filters'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    filters,
    render: h => h(App)
}).$mount('#app')
