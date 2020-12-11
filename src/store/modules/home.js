import { getPromotionBanner } from '@/common/functions/page-home-functions';
import {
    CATEGORY_MENU,
    LIST_SLIDERS,
    NEWS,
    TWO_BANNERS,
    PROMOTION_BANNER,
    SET_PROMOTION_BANNER,
    FETCH_PROMOTION_BANNER,
    LIST_SHOCKED_PRODUCTS,
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
    [NEWS](state) {
        return state.data?.news;
    },
    [TWO_BANNERS](state) {
        return Array.isArray(state.data?.twoBanners) === true ? state.data.twoBanners : [];
    },
    [PROMOTION_BANNER](state) {
        if (!state.promotionBanner) {
            return promotionBannerModel;
        }

        return state.promotionBanner;
    },
    [LIST_SHOCKED_PRODUCTS](state) {
        return Array.isArray(state.data?.listShockedProducts) === true ? state.data.listShockedProducts : [];
    },
}

export const mutations = {
    [SET_HOME_DATA](state, payload) {
        if (isNullOrUndefined(payload?.value) === false) {
            state.data = payload.value;
        }
    },
    [SET_PROMOTION_BANNER](state, payload) {
        if (payload?.value) {
            state.promotionBanner = payload.value;
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
    [FETCH_PROMOTION_BANNER]({ commit }) {
        const data = getPromotionBanner();
        commit(SET_PROMOTION_BANNER, { value: data });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}