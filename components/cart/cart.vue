<template>
    <div class="cart">
        <span class="cart__title h1">Корзина</span>
        <CloseBtn class="cart__close"/>
        <template v-if="products.length">
            <span class="cart__subtitle">Товары в корзине</span>
            <Product :product="product" v-for="product in products" :key="product.id"/>
        </template>
        <template v-else>
            <span class="cart__text"></span>
            <CartBtn>
                перейти к выбору
            </CartBtn>
            
        </template>
    </div>
</template>
<script>
import CartBtn from '@/components/cart/CartBtn'
import Product from '@/components/cart/Product'
import CloseBtn from '@/components/cart/CloseBtn'
import { mapGetters } from 'vuex'
export default {
    components: {
        CartBtn,
        Product,
        CloseBtn
    },
    
    computed: {
        ...mapGetters({
            products: 'product/GET_PRODUCTS'
        })
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

</style>