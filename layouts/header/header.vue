<template>
  <header class="header">
    <div class="header__inner container">
      <div class="header__logo">TestList</div>
      <button class="header__cart" @click="openCart">
        <CartIcon class="header__cart-img"/>
        <span class="header__cart-count">{{cart.length}}</span>
      </button>
    </div>
  </header>
</template>

<script>
import CartIcon from "@/assets/images/icons/cart.svg";

import { mapGetters } from 'vuex'
export default {
  components: {
    CartIcon,
  },
  computed: {
    ...mapGetters({
      cart: "cart/GET_PRODUCTS_FROM_CART"
    })
  },

  methods: {
    openCart() {
      this.$root.$emit('cart:open')
    }
  }
};
</script>

<style lang="sass">
.header
  &__inner
    display: flex
    position: relative
    justify-content: space-between
    width: 100%
    align-items: center
  &__logo
    color: #59606D
    font-size: 22px
    font-weight: 700
  &__cart
    position: relative
    z-index: 2
    &-img
      width: 26px
      height: 26px
      fill: #000
    &-count
      @include absolute($right: -5px, $top: -5px)
      width: 12px
      height: 12px
      font-size: 8px
      color: #fff
      border-radius: 50%
      background-color: #959DAD
      text-align: center
</style>