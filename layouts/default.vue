<template>
  <div class="page__wrapper">
    <Header class="page__header" />

    <main class="page__content">
      <Nuxt />
    </main>

    <transition name="transform">
      <Cart class="page__cart" v-if="open"/>
    </transition>

    <transition name="overlay">
      <Overlay class="page__overlay" v-if="overlay"  @click.native="clickHandler"/>
    </transition>

  </div>
</template>
<script>
import Header from "./header/header";
import Cart from "@/components/cart/Сart"
import Overlay from '@/components/Overlay'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'App',
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
      let body = document.body
      this.open = true
      this.setOverlay(true)
      body.classList.toggle('hidden')
    }),

    this.$root.$on("cart:close", () => {
      let body = document.body
      this.open = false
      this.setOverlay(false)
      body.classList.toggle('hidden')
    })
  },
  methods: {
    ...mapMutations({
      cart: 'cart/SET_CART',
      setOverlay: 'SET_OVERLAY'
    }),

    initData() {
      const localCart = window.localStorage.getItem('cart')
      let cart
      if (localCart) {
        cart = JSON.parse(localCart)
        this.cart(cart)
      }
    },

    clickHandler() {
      this.$root.$emit('mainclose')
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
body
  &.hidden
    overflow: hidden
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
    z-index: 4
    box-shadow: -4px 0px 16px rgba(#000, 0.05)
    border-radius: 8px 0px 0px 8px
</style>
