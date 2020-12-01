import { getListCategories } from '@/common/functions/page-home-functions';
import { FETCH_LIST_CATEGORIES, LIST_CATEGORIES, SET_LIST_CATEGORIES } from '@/store/module-types/home';

export const state = {
    listCategories: [],
}

export const getters = {
    [LIST_CATEGORIES](state) {
        return state.listCategories;
    }
}

export const mutations = {
    [SET_LIST_CATEGORIES](state, payload) {
        if (Array.isArray(payload?.values) === true) {
            state.listCategories = payload.values;
        }
    }
}

export const actions = {
    [FETCH_LIST_CATEGORIES]({ commit }) {
        const data = getListCategories();
        commit(SET_LIST_CATEGORIES, { values: data });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}