import { mapGetters, mapMutations } from 'vuex'

export default {
    ...mapGetters({
        cart: "cart/GET_PRODUCTS_FROM_CART",
    }),
    methods: {
        ...mapMutations('cart', ['ADD_TO_CART', 'CONCAT_CART']),

        addToCart() {
            let product = this.product
            this.ADD_TO_CART({...product})
        },
        concatCart(products) {
            this.CONCAT_CART(products.map(product => ({...product})))
        }
    }
}