import axios from '@/services/axios'

export default {
    async getProducts({ commit }, id) {
        const response = await axios.get(`/product${id ? `?category=${id}` : ''}`)
        const { data } = response
        commit('SET_PRODUCTS', data)

        if (data.length) return true
        else return false
    },

    getSortResponse({commit}, method) {
        commit('SET_SORT_METHOD', method)
    }
}