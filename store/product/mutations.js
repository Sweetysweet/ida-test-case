export default {
    SET_PRODUCTS(state, payload) {
        state.products = payload
    },
    
    SET_SORT_METHOD(state, payload) {
        state.currentSortValue = payload
    }
}