export default {
    GET_PRODUCTS_FROM_CART: ({ cart }) => cart,

    IS_IN_CART: (_, { GET_PRODUCTS_FROM_CART: cart } ) => product => {
        return !!cart.find(p => p.id === product.id)
    },

    GET_AMOUNT(_, {GET_PRODUCTS_FROM_CART: cart }) {
        let tmp = 0
        cart.forEach(product => {
            tmp = tmp + product.price
        })
        return tmp
    }
}