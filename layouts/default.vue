<template>
  <div class="page__wrapper">
    <Header class="page__header" />

    <main class="page__content">
      <Nuxt />
    </main>

    <transition v-if="open">
      <Cart class="page__cart"/>
    </transition>

    <transition name="overlay">
      <Overlay class="page__overlay" v-if="overlay" />
    </transition>

  </div>
</template>
<script>
import Header from "./header/header";
import Cart from "@/components/cart/cart"
import Overlay from '@/components/Overlay'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    Header,
    Cart,
    Overlay
  },
  data: () => ({
    open: false
  }),
  computed: {
    ...mapGetters({
      overlay: "GET_OVERLAY"
    })
  },
  created() {
    this.$root.$on("cart:open", () => {
      this.open = true
      this.setOverlay(true)
    }),

    this.$root.$on("cart:close", () => {
      this.open = false
      this.setOverlay(false)
    })
  },
  methods: {
    ...mapMutations({
      cart: 'cart/SET_CART',
      setOverlay: 'SET_OVERLAY'
    }),

    initData() {
      const localCart = localStorage.getItem('cart')
      let cart
      if (localCart) {
        cart = JSON.parse(localCart)
        this.cart(cart)
      }
    },
  },

  mounted() {
    this.initData()
  }
};
</script>
<style lang="sass">
@import './animate'
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
    width: 100%
    height: 66px
    display: flex
    position: fixed
    z-index: 2
  &__cart
    @include fixed($top: 0, $right: 0)
    height: 100vh
    width: 100%
    max-width: 460px
    background: #fff
    border: 1px solid #ccc
    z-index: 4
</style>
