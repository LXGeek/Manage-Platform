import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) =>{
  import('@/components/home/home.vue').then((module) =>{
      resolve(module)
  })
}
const Detail = (resolve) =>{
  import('@/components/detail/detail.vue').then((module) =>{
      resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
