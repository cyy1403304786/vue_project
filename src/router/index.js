import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import index from '../components/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login ,
      children: [
        {path: 'index',component: login}
      ]
    }
  ]
})
