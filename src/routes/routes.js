import DashboardLayout from '@/views/Layout/DashboardLayout.vue';




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
<<<<<<< HEAD
        path: '/userprofile',
        name: 'userprofile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue'),
        meta: { title: 'User Profile' }
=======
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
>>>>>>> bcae2b8b7bda8908bb649338b4bcc2670fcc7cfe
      },

      {
        path: '/login',
        name: 'login',
<<<<<<< HEAD
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue'),
        meta: { title: 'Login' }
=======
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
>>>>>>> bcae2b8b7bda8908bb649338b4bcc2670fcc7cfe
      },

      {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Search.vue'),
        meta: { title: 'Restaurant Search' }
      }
      ,
      {
        path: '/restaurantdetails',
        name: 'restaurantdetails',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/RestaurantDetails.vue'),
        meta: { title: 'Restaurant Details' }
      }
      ,
      {
        path: '/signup',
        name: 'signup',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/SignUp.vue'),
        meta: { title: 'Sign Up' }
      }
      ,
      {
        path: '/basket',
        name: 'basket',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Basket.vue'),
        meta: { title: 'Basket' }
      }
      ,
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/CheckOut.vue'),
        meta: { title: 'CheckOut' }
      }
      ,
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Order.vue'),
        meta: { title: 'Order' }
      },
      ,
      {
        path: '/faq',
        name: 'faq',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Faq.vue'),
        meta: { title: 'CheckOut' }
      }
<<<<<<< HEAD
      ,
      {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Contact.vue'),
        meta: { title: 'Order' }
      },
      
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Profile.vue'),
        meta: { title: 'Order' }
      },
      {
        path: '/aboutus',
        name: 'aboutus',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Aboutus.vue'),
        meta: { title: 'Order' }
      }
      ,
      {
        path: '/privacy',
        name: 'privacy',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Privacy.vue'),
        meta: { title: 'Order' }
      },
      
      {
        path: '/tax',
        name: 'tax',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Tax.vue'),
        meta: { title: 'Order' }
      },
      {
        path: '/term',
        name: 'term',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Term.vue'),
        meta: { title: 'Order' }
      },
      {
        path: '/sitemap',
        name: 'sitemap',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/SiteMap.vue'),
        meta: { title: 'Order' }
      },
      {
        path: '/workwithus',
        name: 'workwithus',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/WorkWithUs.vue'),
        meta: { title: 'Order' }
      },
      {
        path: '/cuisinerestaurant',
        name: 'cuisinerestaurant',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/CuisineRestaurant.vue'),
        meta: { title: 'Order' }
      },
    ]
  },
=======

    ]
  },

>>>>>>> bcae2b8b7bda8908bb649338b4bcc2670fcc7cfe
];

export default routes;
