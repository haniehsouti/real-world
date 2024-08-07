import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0
  },
  getters: {},
  mutations: {
    INCREASE_COUNTER(state , value) {
      state.counter += value
    }
  },
  actions: {},
  modules: {},
});
