<template>
  <div class="cart-product">
    <div class="cart-product__wrapper">
      <div class="cart-product__image-handler">
        <div class="cart-product__image-wrap">
          <img :src="getImgPath(product.photo)" class="cart-product__image" />
        </div>
      </div>
      <div class="cart-product__body">
        <span class="cart-product__title">{{product.name}}</span>
        <span class="cart-product__price">{{product.price}} ₽</span>
        <div class="cart-product__stars">
          <Star class="cart-product__stars-img" />
          <div class="cart-product__stars-rating">{{product.rating}}</div>
        </div>
      </div>
      <button 
        class="cart-product__trash" 
        @click="deleteProuctHandler(product)" 
      >
        <Trash />
      </button>
    </div>
  </div>
</template>

<script>
import Trash from "@/assets/images/icons/trash.svg";
import Star from '@/assets/images/icons/star.svg'
import imgPath from "@/components/mixins/imgPath";

import {mapMutations} from 'vuex'
export default {
  name: 'CartProduct',
  components: {
    Trash,
    Star,
  },
  props: {
    product: {
      type: Object
    }
  },

  methods: {
    ...mapMutations({
      remove: 'cart/REMOVE_PRODUCT'
    }),

  deleteProuctHandler() {
    this.remove(this.product)
  }

  },
  mixins: [imgPath]
};
</script>

<style lang="sass">
.cart-product
    &__wrapper
      display: flex
      position: relative
      padding: 15px 25px
      box-shadow: 0px 4px 16px rgba(#000, 0.05)
      border-radius: 8px
      background-color: #fff
    &__image-handler
      width: 70px
      margin: 0 auto
    &__image-wrap
      width: 100%
      padding-bottom: 126.7%
      position: relative
    &__image
      @include absolute($top: 0, $left: 0)
      width: 100%
      height: 100%
    &__body
      flex-grow: 1
      max-width: 170px
    &__title
      margin: 16px 0 6px
      color: $grey
      font-size: 14px
    &__price
      display: block
      margin-top: 6px
      font:
        size: 14px
        weight: 700
    &__stars
      display: flex
      margin-top: 16px
      &-img
        width: 13px
        height: 13px
        fill: $yellow
      &-rating
        color: $yellow
        font-size: 10px

</style>