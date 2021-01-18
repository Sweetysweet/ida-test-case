<template>
  <div class="products">
    <ul class="products__list">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="products__item"
      />
    </ul>
  </div>
</template>

<script>
import Product from "@/components/catalog/Product";
import { mapGetters } from "vuex";
export default {
  components: {
    Product,
  },
  computed: {
    ...mapGetters({
      products: "product/GET_PRODUCTS",
    }),
  },
};
</script>

<style lang="sass">
.products
    &__list
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        margin:
        left: -8px
        right: -8px
    &__item
        width: 25%
        margin-bottom: 16px
        padding: 0 8px
</style>