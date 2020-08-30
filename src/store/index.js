import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        image: "1.jpg",
        name: "T-shirt 1",
        price: 2100,
        article: "T1",
        available: true,
        category: "Мужские"
      },
      {
        image: "2.jpg",
        name: "T-shirt 2",
        price: 3150,
        article: "T2",
        available: true,
        category: "Женские"
      },
      {
        image: "3.jpg",
        name: "T-shirt 3",
        price: 4200,
        article: "T3",
        available: false,
        category: "Женские"
      },
      {
        image: "4.jpg",
        name: "T-shirt 4",
        price: 5300,
        article: "T4",
        available: true,
        category: "Мужские"
      },
      {
        image: "5.jpg",
        name: "T-shirt 5",
        price: 6500,
        article: "T5",
        available: false,
        category: "Женские"
      },
      {
        image: "6.jpeg",
        name: "T-shirt 6",
        price: 8700,
        article: "T6",
        available: true,
        category: "Женские"
      }
    ],
    cart: []
  },
  mutations: {
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function(item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    }
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  }
});
