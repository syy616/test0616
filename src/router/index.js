import Vue from 'vue'
import Router from 'vue-router'
const Footer = ()=> import('../components/tabbar/Footer')

const Home = ()=> import('../components/view/home/Home')
const Category = ()=> import('../components/view/category/Category')
const Cart = ()=> import('../components/view/cart/Cart')
const Profile = ()=> import('../components/view/profile/Profile')

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
