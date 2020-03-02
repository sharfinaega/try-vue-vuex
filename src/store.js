import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const store = new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    }
  },
  getters: {
    getProducts: state => {
      console.log(state);
      return state.products;
    }
  },
  actions: {
    // fetchProducts: a => {
    //   fetch("https://thereportoftheweek-api.herokuapp.com/reports")
    //     .then(res => res.json())
    //     .then(result => {
    //       a.commit("setProducts", result.data);
    //     });
    // }
    loadProducts({ commit }) {
      axios
        .get("https://thereportoftheweek-api.herokuapp.com/reports")
        .then(r => r.data)
        .then(products => {
          console.log(products);
          commit("setProducts", products);
        });
    }
  }
});

export default store;
