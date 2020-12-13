import { isNullOrUndefined } from '@/common/functions';
import { FETCH_FOOTER_DATA, LIST_UTILITIES, SET_FOOTER_DATA } from '@/store/module-types/footer';
import { getFooterData } from '@/api/footer';

export const state = {
    data: null,
}

export const getters = {
    [LIST_UTILITIES](state) {
        return Array.isArray(state.data?.listUtilities) === true ? state.data.listUtilities : [];
    },
}

export const mutations = {
    [SET_FOOTER_DATA](state, payload) {
        if (isNullOrUndefined(payload?.value) === false) {
            state.data = payload.value;
        }
    },
}

export const actions = {
    [FETCH_FOOTER_DATA]({ commit }) {
        getFooterData().then((data) => {
            commit(SET_FOOTER_DATA, { value: data });
        }).catch(() => {

        });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}