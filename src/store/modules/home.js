import { getListCategories, getListHomeBannerDescriptions, getListHomeBanners } from '@/common/functions/page-home-functions';
import {
    FETCH_LIST_CATEGORIES,
    FETCH_LIST_HOME_BANNERS,
    FETCH_LIST_HOME_BANNER_DESCRIPTIONS,
    LIST_HOME_BANNER_DESCRIPTIONS,
    LIST_CATEGORIES,
    LIST_HOME_BANNERS,
    SET_LIST_CATEGORIES,
    SET_LIST_HOME_BANNERS,
    SET_LIST_HOME_BANNER_DESCRIPTIONS,
} from '@/store/module-types/home';

export const state = {
    listCategories: [],
    listHomeBanners: [],
    listHomeBannerDescriptions: [],
}

export const getters = {
    [LIST_CATEGORIES](state) {
        return state.listCategories;
    },
    [LIST_HOME_BANNERS](state) {
        return state.listHomeBanners;
    },
    [LIST_HOME_BANNER_DESCRIPTIONS](state) {
        return state.listHomeBannerDescriptions;
    }
}

export const mutations = {
    [SET_LIST_CATEGORIES](state, payload) {
        if (Array.isArray(payload?.values) === true) {
            state.listCategories = payload.values;
        }
    },
    [SET_LIST_HOME_BANNERS](state, payload) {
        if (Array.isArray(payload?.values) === true) {
            state.listHomeBanners = payload.values;
        }
    },
    [SET_LIST_HOME_BANNER_DESCRIPTIONS](state, payload) {
        if (Array.isArray(payload?.values) === true) {
            state.listHomeBannerDescriptions = payload.values;
        }
    }
}

export const actions = {
    [FETCH_LIST_CATEGORIES]({ commit }) {
        const data = getListCategories();
        commit(SET_LIST_CATEGORIES, { values: data });
    },
    [FETCH_LIST_HOME_BANNERS]({ commit }) {
        const data = getListHomeBanners();
        commit(SET_LIST_HOME_BANNERS, { values: data });
    },
    [FETCH_LIST_HOME_BANNER_DESCRIPTIONS]({ commit }) {
        const data = getListHomeBannerDescriptions();
        commit(SET_LIST_HOME_BANNER_DESCRIPTIONS, { values: data });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}