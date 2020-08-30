<template>
  <div class="cart-item">
    <img
      class="cart-item__img"
      :src="require('../assets/img/' + cart_item_data.image)"
      alt="Cart Product"
    />
    <div class="cart-item__info">
      <p class="cart-item__name">{{ cart_item_data.name }}</p>
      <p class="cart-item__price">{{ cart_item_data.price }}</p>
      <p class="cart-item__asrticle">{{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Qty:</p>
      <div class="cart-item__quantity-inner">
        <span>
          <span @click="decrementItem">-</span>
          {{ cart_item_data.quantity }}
          <span @click="incrementItem">+</span>
        </span>
      </div>
    </div>
    <button class="cart-item__btn" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "VCartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px #ccc;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 20px;
  p {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__img {
    width: 100px;
  }
  &__name {
    font-size: 25px;
    font-weight: bold;
  }
  &__price {
    font-size: 30px;
  }
  &__article {
    font-size: 18px;
  }
  &__quantity {
    font-size: 25px;
    text-align: center;
    span {
      margin: 0 5px;
      span {
        cursor: pointer;
        padding: 10px;
      }
    }
  }
  &__btn {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: tomato;
    color: white;
  }
}
</style>