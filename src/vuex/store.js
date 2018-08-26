import Vue from 'vue'
import Vuex from 'vuex'

console.log(222)

Vue.use(Vuex)

const state = {
    isLoading: false,
    direction: 'forward'
}
export default new Vuex.Store({
    state,
    mutations: {
        UPDATE_LOADING(state, status) {
            state.isLoading = status
        },
        UPDATE_DIRECTION(state, direction) {
            state.direction = direction
        }
    }
})
