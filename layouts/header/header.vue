<template>
  <header class="header">
    <div class="header__inner container">
      <NuxtLink to="/" class="header__logo">
        <LogoIcon />
      </NuxtLink>
      <button class="header__cart" @click="openCart">
        <CartIcon class="header__cart-img"/>
        <div class="header__cart-count-wrapper">
          <span class="header__cart-count">{{cart.length}}</span>
        </div>
      </button>
    </div>
  </header>
</template>

<script>
import CartIcon from "@/assets/images/icons/cart.svg"
import LogoIcon from '@/assets/images/icons/logo.svg'

import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {
    CartIcon,
    LogoIcon
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
  &__cart
    position: relative
    z-index: 2
    &-img
      width: 26px
      height: 26px
      fill: #000
    &-count-wrapper
      @include absolute($right: -5px, $top: -5px)
      width: 12px
      height: 12px
      border-radius: 50%
      background-color: #959DAD
    &-count
      @include absolute($right: 4px, $top: 1px)
      font-size: 8px
      color: #fff
      
      text-align: center
</style>