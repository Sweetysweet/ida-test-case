import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import category from './category'
import product from './product'
Vue.use(Vuex)

export const modules = {
    cart,
    category,
    product
}

export const state = () => ({

})