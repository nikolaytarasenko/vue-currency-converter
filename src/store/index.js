import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currencyResult: null,
        allCurrencies: null
    },
    mutations: {
        SET_CURRENCY_RESULT(state, payload) {
            state.currencyResult = payload;
        },
        UPDATE_ALL_CURRENCIES(state, payload) {
            state.allCurrencies = payload;
        }
    },
    actions: {
        async UPDATE_CURRENCY_RESULT({ commit }, payload) {
            const api_key = '1d91312e75028f97c488';
            const query = `${payload.from}_${payload.to}`;
            const url = `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${api_key}`;

            const response = await fetch(url);
            const data = await response.json();

            commit('SET_CURRENCY_RESULT', data);
        },
        async UPDATE_ALL_CURRENCIES({ commit }) {
            const api_key = '1d91312e75028f97c488';
            const url = `https://free.currconv.com/api/v7/currencies?&apiKey=${api_key}`;

            const response = await fetch(url);
            const data = await response.json();

            console.log(typeof data);

            commit('UPDATE_ALL_CURRENCIES', data);
        }
    },
    getters: {
        GET_CURRENCY_RESULT(state) {
            return state.currencyResult;
        },
        GET_ALL_CURRENCIES(state) {
            return state.allCurrencies;
        }
    }
});