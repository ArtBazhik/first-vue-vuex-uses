<template>
  <div class="catalog-item">
    <img
      class="catalog-item__img"
      :src="require('../assets/img/' + product_data.image)"
      alt="Photo"
    />
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">{{ product_data.price }} Р.</p>
    <button class="catalog-item__btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "VCatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-item {
  text-align: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px #ccc;
  border-radius: 5px;
  padding: 16px;
  margin: 0 15px 30px 15px;
  &__btn {
    padding: 10px 15px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5px;
    background-color: yellowgreen;
    color: #fff;
    &:hover {
      background-color: rgb(155, 194, 78);
      box-shadow: 0 0 10px #ccc inset;
    }
	 &:active{
		 box-shadow: 0 0 10px rgba(0, 0, 0, 0.466) inset;
		 background-color: rgb(148, 221, 39);
	 }
  }
  &__name {
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 1.2px;
  }
  &__img {
    width: 100px;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 15px;
  }
}
</style>
