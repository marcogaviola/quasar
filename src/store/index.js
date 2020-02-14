import Vue from 'vue'
import Vuex from 'vuex'

import todo from './todo'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      todo
    },
    strict: process.env.DEV
  })

  return Store
}
