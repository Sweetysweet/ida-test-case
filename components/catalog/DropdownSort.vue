<template>
  <div class="catalog-dropdowns__wrapper">
    <div class="catalog-dropdowns__select">
      <button class="catalog-dropdowns__button" @click="dropdown = !dropdown">
        <span class="catalog-dropdowns__button_title">Сортировать по:</span>
        <span class="catalog-dropdowns__title">{{ sort.text }}</span>
      </button>
      <ul class="catalog-dropdowns__list" v-if="dropdown">
        <li class="catalog-dropdowns__item" :class="{'active': method.value === sort.value}" v-for="method in sortMethods" :key="method.id">
          <a class="catalog-dropdowns__link" @click="changeSortMethod(method.value)">
            <span class="catalog-dropdowns__text">{{ method.text }}</span>
          </a>
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DropDownSort",
  data: () => ({
    dropdown: false,
  }),
  computed: {
    ...mapGetters({
      sort: "product/GET_SORT",
      sortMethods: "product/GET_METHODS"
    }),
  },
  methods: {
    ...mapActions({
      getSort: 'product/getSortResponse'
    }),

    changeSortMethod(method) {
      this.getSort(method)
      this.dropdown = false
    }
  }
};
</script>
<style lang="sass">
.catalog-dropdowns
  &__wrapper
    position: relative
    display: flex
    justify-content: flex-end
    margin: 0 10px 34px 0
    margin-right: 10px
  &__select
    position: relative
    right: 10px
  &__title
    color: $grey
  &__list
    position: absolute
    padding: 8px 0px
    top: 35px
    width: 108%
    overflow: hidden
    background-color: #fff
    box-shadow: 0px 4px 16px rgba(#000, 0.05)
    border-radius: 8px
    z-index: 2
    
  &__item
    width: 100%
    cursor: pointer
    padding: 2px 12px
    transition: color 0.3s ease-in-out
    transition: background-color 0.3s ease-in-out
    span
      font-size: 14px
    &.active, &:hover
      background-color: $grey-extra-light
      span
        color: #000
  &__link
    color: $grey-light
    text-decoration: none
    display: block
    width: 100%
  &__text
    display: block
    width: 100%
  &__button
    cursor: pointer
    position: relative
    font-size: 16px
    &:after
      position: absolute
      top: 50%
      right: -12px
      content: ''
      transform: translateY(-50%)
      border-style: solid
      border-width: 4px 4px 0 4px
      border-color: $grey transparent transparent transparent
      
</style>