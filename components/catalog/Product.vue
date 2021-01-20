<template>
  <li class="product">
    <div class="product__inner">
      <div class="product__stars">
        <div class="product__stars-img">
          <StarIcon />
        </div>
        <div class="product__stars-rating">{{ product.rating }}</div>
      </div>
      <button class="product__buy" @click="addToCart" v-if="!isInCart(product)" >
        <CartIcon class="product__buy-img" />
      </button>
      <div class="product__image-handler">
        <div class="product__image-wrap">
          <img :src="getImgPath(product.photo)" class="product__image" />
        </div>
      </div>
      <div class="product__title">{{ product.name }}</div>
      <div class="product__price">{{ product.price }} ₽</div>
    </div>
  </li>
</template>

<script>
import {mapGetters} from 'vuex'
import StarIcon from "@/assets/images/icons/star.svg";
import CartIcon from "@/assets/images/icons/cart.svg";

import imgPath from "@/components/mixins/imgPath";
import addToCart from "@/components/mixins/addToCart"
export default {
  name: 'Product',
  components: {
    StarIcon,
    CartIcon,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      isInCart: "cart/IS_IN_CART"
    })
  },
  mixins: [imgPath, addToCart],
};
</script>

<style lang="sass">
.product
    &__inner
        background-color: #fff
        position: relative
        padding: 18px
        height: 100%
        box-shadow: 0px 4px 16px rgba(#000, 0.05)
        border-radius: 8px
    &__stars
        display: flex
        align-items: center
        @include absolute($top: 18px, $left: 18px)
        &-img
            width: 13px
            height: 13px
            fill: $yellow
        &-rating
            color: $yellow
    &__buy
        @include absolute($top: 18px, $right: 18px)
        &-img
            width: 12px
            height: 12px
            fill: $grey-light
    &__image-handler
        width: 142px
        margin: 0 auto
    &__image-wrap
        width: 100%
        padding-bottom: 126.7%
        position: relative
    &__image
        @include absolute($top: 0, $left: 0)
        width: 100%
        height: 100%
    &__title
        margin: 16px 0 6px
        color: $grey
        font-size: 14px
    &__price
        font:
            size: 14px
            weight: 700
</style>