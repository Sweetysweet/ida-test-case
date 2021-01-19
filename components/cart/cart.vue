<template>
    <div class="cart">
        <span class="cart__title h1">Корзина</span>
        <CloseBtn class="cart__close" @click.native="closeCartHandler"/>
        <template v-if="cartProducts.length">
            <span class="cart__subtitle">Товары в корзине</span>
            <Product :product="product" v-for="product in cartProducts" :key="product.id"/>
            <FormOrder />
        </template>
        <template v-else>
            <span class="cart__text">Пока что вы ничего не добавили в корзину.</span>
            <CartBtn @click.native="closeCartHandler" class="cart__btn">
                Перейти к выбору
            </CartBtn>
            
        </template>
    </div>
</template>
<script>
import CartBtn from '@/components/cart/CartBtn'
import Product from '@/components/cart/Product'
import CloseBtn from '@/components/cart/CloseBtn'
import FormOrder from '@/components/cart/FormOrder'
import { mapGetters } from 'vuex'
export default {
    components: {
        CartBtn,
        Product,
        CloseBtn,
        FormOrder
    },
    computed: {
        ...mapGetters({
            products: 'product/GET_PRODUCTS',
            cartProducts: 'cart/GET_PRODUCTS_FROM_CART'
        })
    },

    methods: {
        closeCartHandler() {
            this.$root.$emit("cart:close")
        }
    }
}
</script>
<style lang="sass">
.cart
    position: relative
    padding: 52px 48px
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

</style>