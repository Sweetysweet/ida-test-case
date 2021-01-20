import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default {
    namespaced: true,
    state: () => ({
        products: [],
        sortMethod: 'price'
    }),
    mutations,
    actions,
    getters,
}