import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Search.vue')
      }
      ,
      {
        path: '/details',
        name: 'details',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/RestaurantDetails.vue')
      }
      ,
      {
        path: '/sign',
        name: 'sign',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/SignUp.vue')
      }
      ,
      {
        path: '/basket',
        name: 'basket',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Basket.vue')
      }
      ,
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/CheckOut.vue')
      }
      ,
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Order.vue')
      }
     
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
     
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
