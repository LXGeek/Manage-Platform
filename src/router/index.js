import Vue from 'vue'
import Router from 'vue-router'

const Login = (resolve) =>{
  import('@/components/login/login.vue').then((module) =>{
      resolve(module)
  })
}

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

const Client = (resolve) =>{
  import('@/components/client/client.vue').then((module) =>{
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
      path: '/login',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/client',
      name: 'Client',
      component: Client
    }
  ]
})
