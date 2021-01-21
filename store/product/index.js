import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default {
    namespaced: true,
    state: () => ({
      products: [],
      currentSortValue: '',
      sortMethods: [
        {
          value: 'rating',
          text: 'популярности',
          id: 1
        },
        {
          value: 'price',
          text: 'цене',
          id: 2
        }
      ]
    }),
    mutations,
    actions,
    getters,
}