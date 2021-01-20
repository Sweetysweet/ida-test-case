<template>
  <div class="catalog-dropdowns__wrapper">
    <span class="catalog-dropdowns__title">Сортировать по: </span>
    <select class="catalog-dropdowns__select" v-model="sortMethodControl">
      <option value="price">цене</option>
      <option value="populate">популярности</option>
    </select>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DropDownSort",
  computed: {
    ...mapGetters({
      sort: "product/GET_SORT",
    }),

    sortMethodControl: {
      get() {
        return this.sort;
      },
      set(val) {
        console.log(val);
      },
    },
  },
};
</script>
<style lang="sass">
</style>