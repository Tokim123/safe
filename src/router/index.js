import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index/index.vue'
import logs from '../pages/logs/index.vue'
import counter from '../pages/counter/index.vue'
import details from '../pages/details/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    alias: '/pages/index/main'
  }, {
    path: '/logs',
    name: 'logs',
    component: logs,
    alias: '/pages/logs/main'
  }, {
    path: '/counter',
    name: 'counter',
    component: counter,
    alias: '/pages/counter/main'
  }, {
    path: '/details',
    name: 'details',
    component: details,
    alias: '/pages/details/main'
  }]
})
