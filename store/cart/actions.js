export default {
    sendUserData({ commit }, client) {
        commit('SET_ORDER', client)
    },
    clearCart({ commit }) {
        commit('CLEAR_CART')
    }
}