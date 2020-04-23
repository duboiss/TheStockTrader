import Vue from 'vue'
import App from './App.vue'
import './filters'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = 'https://the-stock-trader-d7165.firebaseio.com/';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
