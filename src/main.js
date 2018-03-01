// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {http} from '@/services';
import {VirtualScroller} from 'vue-virtual-scroller';
import './static-loader';

Vue.config.productionTip = false
Vue.component('virtual-scroller', VirtualScroller);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    created() {
        http.init()
    }
});
