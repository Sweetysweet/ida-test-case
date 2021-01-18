<template>
  <header class="header">
    <div class="header__inner container">
      <div class="header__logo">TestList</div>
      <div class="header__cart">
        <CartIcon class="header__cart-img" />
        <span class="header__cart-count">3</span>
      </div>
    </div>
  </header>
</template>

<script>
import CartIcon from "@/assets/images/icons/cart.svg";
export default {
  components: {
    CartIcon,
  },
};
</script>

<style lang="sass">
.header
    width: 100%
    height: 66px
    display: flex
    position: fixed
    z-index: 2
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