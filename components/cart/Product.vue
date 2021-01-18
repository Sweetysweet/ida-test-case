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
        <span class="cart-product__price">{{product.price}}</span>
        <div class="cart-product__stars">
          <Star class="cart-product__stars-img" />
          <div class="cart-product__stars-rating">{{product.rating}}</div>
        </div>
      </div>
      <button class="cart-product__trash">
        <Trash />
      </button>
    </div>
  </div>
</template>

<script>
import Trash from "@/assets/images/icons/trash.svg";
import Star from '@/assets/images/icons/star.svg'
import imgPath from "@/components/mixins/imgPath";
export default {
  components: {
    Trash,
    Star,
  },
  props: {
    product: {
        type: Object
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

</style>