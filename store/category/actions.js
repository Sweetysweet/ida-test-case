import axios from '@/services/axios'

export default {
    async getCategories({ commit }) {
        const response = await axios.get(`/product-category`)
        const { data } = response

        commit('SET_CATEGORIES', data)
    }
}