<template>
  <section class="main-wrapper">
    <h1 class="catalog-title">Catalog</h1>
    <VCatalog />
  </section>
</template>

<script>
import VCatalog from "../components/v-catalog";
import { mapGetters } from "vuex";

export default {
  name: "VHome",
  data() {
    return {};
  },
  components: { VCatalog },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 900px;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
