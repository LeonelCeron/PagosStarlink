import { createRouter, createWebHistory } from 'vue-router';

import Customer from '../views/Customers/Customers.vue';
import Login from '@/views/Auth/Login.vue';
import Dashboard from '@/views/Home/Dashboard.vue';
import Register from '@/views/Auth/Register.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Products from '@/views/Products/Products.vue';
import AboutView from '@/views/AboutView.vue';
import useStore from '@/store';
import AuthLayout from '@/layouts/AuthLayout.vue';
/*
    import ExampleView from '../views/ExampleView.vue'
    import CreateProduct from '@/views/products/CreateProduct.vue'
    import EditProduct from '../views/products/EditProduct.vue'
    import ShowProducts from '../views/products/ShowProducts.vue'
*/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      redirect: '/dashboard',
      component: DefaultLayout,
      meta: { requiresAuth: true},
      children: [
        { path: '/dashboard', name:'Dashboard', component: Dashboard },
        { path: '/customer', name:'Customer', component: Customer },
        { path: '/product', name:'Product', component: Products },
      ]
    },
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    */
    {
      path: '/auth', 
      redirect: '/login',
      name: 'Auth',
      component: AuthLayout,
      meta: { isGuest: true},
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },  
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
      ]
    },

  ]
})

router.beforeEach((to, from, next) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const store = useStore()

  //if (to.meta.requiresAuth && !store.$state.user.token) return '/login'
  if (to.meta.requiresAuth && !store.$state.user.token) {
    next({ name: 'Login' }) 
  }else if(store.$state.user.token && (to.meta.isGuest)){
  //}else if(store.$state.user.token && (to.name === 'Login' || to.name === 'Register')){
    next({ name: 'Dashboard' }) 
  }else{
    next()
  }
});

export default router
