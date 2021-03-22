/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import DashboardPlugin from './plugins/dashboard-plugin'
import App from './App.vue'
import VueCarousel from 'vue-carousel'

<<<<<<< HEAD
Vue.use(VueCarousel)
=======

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import {
  createApolloClient,
  restartWebsockets
} from 'vue-cli-plugin-apollo/graphql-client'


Vue.use(VueCarousel);
>>>>>>> bcae2b8b7bda8908bb649338b4bcc2670fcc7cfe

// router setup
import router from './routes/router'

import { createProvider } from './vue-apollo'
// plugin setup
Vue.use(DashboardPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider: createProvider(),
  render: h => h(App),
  apolloProvider: createProvider(),
  router
<<<<<<< HEAD
})
=======
});

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://foodabout-api.flycep.com/graphql/',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
Vue.use(VueApollo)

// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  wsEndpoint: null, //process.env.VUE_APP_GRAPHQL_WS || 'ws://127.0.0.1:8000/graphql',
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  // link: myLink

  // Override default cache
  // cache: myCache

  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
}
export function createProvider(options = {}) {
  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options
  })
  apolloClient.wsClient = wsClient

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      }
    },
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log('Global error handler')
      Vue.swal(error.message)
      /*console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message
      )*/
    }
  })

  return apolloProvider
}
>>>>>>> bcae2b8b7bda8908bb649338b4bcc2670fcc7cfe
