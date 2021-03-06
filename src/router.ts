import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import top from './components/top/top_index.vue'
import main from './components/main/main_index.vue'
import description from './components/description/description_index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }, {
      path: '/description',
      name: 'description',
      component: description
    }
    // {
    // path: '/about',
    // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
