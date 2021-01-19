export default {
    SET_CART(state, payload) {
        state.cart = payload
    },
    
    ADD_TO_CART(state, product) {
        state.cart = state.cart.concat(product)
        window.localStorage.setItem("cart", JSON.stringify(state.cart))
    },

    CONCAT_CART(state, products) {
        state.cart = state.cart.concat(products)
        window.localStorage.setItem("cart", JSON.stringify(sate.cart))
    },

    CLEAR_CART(state) {
        state.cart = []
        window.localStorage.setItem("cart", JSON.stringify(state.cart))
    },

    REMOVE_PRODUCT(state, product) {
        console.log('ssdsd',product);
        const currentProduct = state.cart.findIndex(p => p.id === product.id)
        state.cart.splice(currentProduct, 1)
        window.localStorage.setItem("cart", JSON.stringify(state.cart))
    }
}