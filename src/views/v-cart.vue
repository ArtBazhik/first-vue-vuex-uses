<template>
  <div class="cart">
    <h2 class="cart__title">Cart</h2>
    <div v-if="CART.length">
      <VCartItem
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      />
      <div class="cart__total">
        Total:
        <span>{{ cartTotalCost }} Р.</span>
      </div>
    </div>
    <p class="cart__not-items" v-else>There are no items in your cart...</p>
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "VCart",
  components: { VCartItem },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];

      for (let item of this.CART) {
        result.push(item.price * item.quantity);
      }

      result = result.reduce(function (sum, el) {
        return sum + el;
      });
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  padding: 0 20px 100px 20px;
  &__title {
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin: 50px 0;
  }
  &__not-items {
    font-size: 40px;
    text-align: center;
  }
  &__total {
    position: fixed;
    width: 100%;
    padding: 30px 0;
    bottom: 0;
    font-size: 30px;
    text-align: center;
    background-color: rgb(44, 189, 44);
  }
}
</style>