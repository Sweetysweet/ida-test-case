<template>
  <div class="page__wrapper">
    <Header class="page__header" />
    <main class="page__content">
      <Nuxt />
    </main>
  </div>
</template>
<script>
import Header from "./header/header";
import { mapMutations } from 'vuex'
export default {
  components: {
    Header,
  },

  methods: {
    ...mapMutations({
      cart: 'cart/SET_CART'
    }),

    initData() {
      const localCart = localStorage.getItem('cart')
      let cart
      if (localCart) {
        cart = JSON.parse(localCart)
        this.cart(cart)
      }
    }
  },

  mounted() {
    this.initData()
  }
};
</script>
<style lang="sass">
html
  font-family: "Arial", sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*,
*:before,
*:after
  box-sizing: border-box
  margin: 0

.container
  margin: 0 auto
  width: 100%
  max-width: 1140px

.page
  &__wrapper
    display: flex
    flex-direction: column
    min-height: 100vh
  &__content
    background-color: #fff
    flex-grow: 1
    padding-top: 66px
  &__header
    background-color: #fff
    box-shadow: 0px 4px 16px rgba(#000, 0.05)
</style>
