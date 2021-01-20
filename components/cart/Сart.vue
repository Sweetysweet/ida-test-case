<template>
  <div class="cart">
    <span class="cart__title h1">Корзина</span>
    <CloseBtn class="cart__close" @click.native="closeCartHandler" />
    <template v-if="step === 1">
        <template v-if="cartProducts.length">
        <span class="cart__subtitle">Товары в корзине</span>
        <Product
            :product="product"
            v-for="product in cartProducts"
            :key="product.id"
        />
        <FormOrder @nextstep="changeStep()" />
        </template>
        <template v-else>
        <span class="cart__text">Пока что вы ничего не добавили в корзину.</span>
        <CartBtn @click.native="closeCartHandler" class="cart__btn">
            Перейти к выбору
        </CartBtn>
        </template>
    </template>
    <div class="cart__success" v-show="step == 2">
      <img :src="require('~/assets/images/icons/success.png')" />
      <div class="cart__success-text">
        <span class="cart__success-title">Заявка успешно отправлена</span>
        <span class="cart__success-subtitle">Вскоре наш менеджер свяжется с Вами</span>
      </div>
    </div>
  </div>
</template>
<script>

import CartBtn from "@/components/cart/CartBtn";
import Product from "@/components/cart/Product";
import CloseBtn from "@/components/cart/CloseBtn";
import FormOrder from "@/components/cart/FormOrder";
import { mapGetters } from "vuex";
export default {
  name: 'Cart',
  components: {
    CartBtn,
    Product,
    CloseBtn,
    FormOrder
    
  },
  data: () => ({
    step: 1,
  }),
  computed: {
    ...mapGetters({
      products: "product/GET_PRODUCTS",
      cartProducts: "cart/GET_PRODUCTS_FROM_CART",
    }),
  },

  created() {
    this.$root.$on('mainclose', () => {
        this.closeCartHandler()
    })
  },

  methods: {
    closeCartHandler() {
      this.$root.$emit("cart:close");
    },
    changeStep() {
      this.step = 2
    },
  },
};
</script>
<style lang="sass">
.cart
    position: relative
    display: flex
    flex-direction: column
    padding: 52px 48px
    height: 200px
    overflow-y: scroll
    &__close
        @include absolute ($top: 52px, $right: 48px)
    &__subtitle
        display: block
        margin-top: 24px
        color: $grey
        font:
        size: 18px
        margin: 24px 0 16px
    &__text
        display: block
        margin-top: 24px
        width: 325px
    &::-webkit-scrollbar
        -webkit-appearance: none !important
    &::-webkit-scrollbar
        width: 4px !important
        background-color: #F5F5F5
        &-track
            -webkit-box-shadow: inset 0 0 6px rgba($grey, 0.3)
            border-radius: 10px
            background-color: #F5F5F5
        &-thumb
            border-radius: 10px
            -webkit-box-shadow: inset 0 0 6px rgba($grey, .3)
            background-color: #555
    &__success
        display: flex
        flex-direction: column
        justify-content: center
        flex-grow: 1
        align-items: center
        &-text
            margin-top: 24px
            text-align: center
        &-title
            font-size: 24px
            font-weight: 700
            display: block
            margin-bottom: 2px
        &-subtitle
            color: $grey
            display: block

</style>