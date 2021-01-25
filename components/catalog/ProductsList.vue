<template>
  <div class="products">
    <ul class="products__list">
      <Product
        v-for="product in sortedProducts"
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
  name: 'ProductsList',
  components: {
    Product,
  },
  created() {
    console.log(this.products.forEach(p => console.log(p.rating)))
  },
  computed: {
    ...mapGetters({
      products: "product/GET_PRODUCTS",
      sortedProducts: "product/GET_SORTED_PRODUCTS"
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