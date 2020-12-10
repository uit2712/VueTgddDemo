import { getListHomeBannerDescriptions, getListShockedProducts, getListTechNews, getPromotionBanner, getTwoBanners } from '@/common/functions/page-home-functions';
import {
    FETCH_LIST_HOME_BANNER_DESCRIPTIONS,
    LIST_HOME_BANNER_DESCRIPTIONS,
    CATEGORY_MENU,
    LIST_SLIDERS,
    SET_LIST_HOME_BANNER_DESCRIPTIONS,
    FETCH_LIST_TECH_NEWS,
    SET_LIST_TECH_NEWS,
    LIST_TECH_NEWS,
    TWO_BANNERS,
    SET_TWO_BANNERS,
    FETCH_TWO_BANNERS,
    PROMOTION_BANNER,
    SET_PROMOTION_BANNER,
    FETCH_PROMOTION_BANNER,
    LIST_SHOCKED_PRODUCTS,
    SET_LIST_SHOCKED_PRODUCTS,
    FETCH_LIST_SHOCKED_PRODUCTS,
    FETCH_HOME_DATA,
    SET_HOME_DATA
} from '@/store/module-types/home';
import { promotionBannerModel } from '@/models/home';
import { isNullOrUndefined } from '@/common/functions';
import { getHomeData } from '@/api/home';

export const state = {
    categoryMenu: [],
    listHomeBanners: [],
    listHomeBannerDescriptions: [],
    listTechNews: [],
    twoBanners: [],
    promotionBanner: null,
    listShockedProducts: [],
    data: null,
}

export const getters = {
    [CATEGORY_MENU](state) {
        return Array.isArray(state.data?.categoryMenu) === true ? state.data.categoryMenu : [];
    },
    [LIST_SLIDERS](state) {
        return Array.isArray(state.data?.listSliders) === true ? state.data.listSliders : [];
    },
    [LIST_HOME_BANNER_DESCRIPTIONS](state) {
        return state.listHomeBannerDescriptions;
    },
    [LIST_TECH_NEWS](state) {
        return state.listTechNews;
    },
    [TWO_BANNERS](state) {
        return state.twoBanners;
    },
    [PROMOTION_BANNER](state) {
        if (!state.promotionBanner) {
            return promotionBannerModel;
        }

        return state.promotionBanner;
    },
    [LIST_SHOCKED_PRODUCTS](state) {
        return state.listShockedProducts;
    },
}

export const mutations = {
    [SET_HOME_DATA](state, payload) {
        if (isNullOrUndefined(payload?.value) === false) {
            state.data = payload.value;
        }
    },
    [SET_LIST_HOME_BANNER_DESCRIPTIONS](state, payload) {
        if (Array.isArray(payload?.values) === true) {
            state.listHomeBannerDescriptions = payload.values;
        }
    },
    [SET_LIST_TECH_NEWS](state, payload) {
        if (Array.isArray(payload?.values) === true) {
            state.listTechNews = payload.values;
        }
    },
    [SET_TWO_BANNERS](state, payload) {
        if (Array.isArray(payload?.values) === true) {
            state.twoBanners = payload.values;
        }
    },
    [SET_PROMOTION_BANNER](state, payload) {
        if (payload?.value) {
            state.promotionBanner = payload.value;
        }
    },
    [SET_LIST_SHOCKED_PRODUCTS](state, payload) {
        if (Array.isArray(payload?.values) === true) {
            state.listShockedProducts = payload.values;
        }
    },
}

export const actions = {
    [FETCH_HOME_DATA]({ commit }) {
        getHomeData().then((data) => {
            commit(SET_HOME_DATA, { value: data });
        }).catch(() => {

        });
    },
    [FETCH_LIST_HOME_BANNER_DESCRIPTIONS]({ commit }) {
        const data = getListHomeBannerDescriptions();
        commit(SET_LIST_HOME_BANNER_DESCRIPTIONS, { values: data });
    },
    [FETCH_LIST_TECH_NEWS]({ commit }) {
        const data = getListTechNews();
        commit(SET_LIST_TECH_NEWS, { values: data });
    },
    [FETCH_TWO_BANNERS]({ commit }) {
        const data = getTwoBanners();
        commit(SET_TWO_BANNERS, { values: data });
    },
    [FETCH_PROMOTION_BANNER]({ commit }) {
        const data = getPromotionBanner();
        commit(SET_PROMOTION_BANNER, { value: data });
    },
    [FETCH_LIST_SHOCKED_PRODUCTS]({ commit }) {
        const data = getListShockedProducts();
        commit(SET_LIST_SHOCKED_PRODUCTS, { values: data });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}