import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart'
import category from './category'
import product from './product'

import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const modules = {
    cart, 
    category,
    product
}

export {
    state,
    getters,
    mutations,
    modules
}