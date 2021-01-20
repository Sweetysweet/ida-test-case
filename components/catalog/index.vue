<template>
  <div class="catalog">
    <Menu class="catalog__menu" />
    <div>
      <DropdownSort class="catalog__dropdowns" />
      <ProductsList class="catalog__products" />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/catalog/Menu";
import ProductsList from "@/components/catalog/ProductsList";
import DropdownSort from "@/components/catalog/DropdownSort";
export default {
  components: {
    Menu,
    ProductsList,
    DropdownSort,
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