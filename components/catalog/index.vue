<template>
  <div class="catalog">
    <Menu class="catalog__menu" />
    <ProductsList class="catalog__products" />
  </div>
</template>

<script>
import Menu from "@/components/catalog/Menu";
import ProductsList from "@/components/catalog/ProductsList";

export default {
  components: {
    Menu,
    ProductsList,
  },
};
</script>

<style lang="sass">
.catalog
  display: flex
  &__menu
    min-width: 160px
    margin-right: 16px
    &__products
      flex-grow: 1
</style>