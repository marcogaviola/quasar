import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

import todo from './todo'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    modules: {
      todo
    },
    strict: process.env.DEV
  })

  return Store
}
