<template>
  <section class="catalog">
    <VCatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product" 
      @addToCart="addToCart"
    />
  </section>
</template>

<script>
import VCatalogItem from "./v-catalog-item";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "VCatalog",
  components: { VCatalogItem },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
		 this.ADD_TO_CART(data)
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
}
</style>
