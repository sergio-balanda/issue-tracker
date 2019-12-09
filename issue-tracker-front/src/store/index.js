import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  // es un objeto que contiene el estado de los datos de aplicación.
  state: {
  },
  //también es un objeto que contiene métodos que afectan el estado.
  //La única forma de modificar el state
  //Las mutaciones no se pueden llamar directamente, por lo que son ejecutadas con store.commit
  mutations: {
  },
  //son métodos utilizados para provocar mutaciones y ejecutar código asíncrono.
  //Se ejecutan con store.dispatch
  //En vez de modificar el state, los actions realizan mutaciones.
  actions: {
  },
  modules: {
    user
  }
})
