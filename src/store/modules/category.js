import { isNullOrUndefined } from '@/common/functions';
import {
    FETCH_CATEGORY_DATA,
    SET_CATEGORY_DATA,
    SET_IS_FETCH_CATEGORY_DATA,
    IS_FETCH_CATEGORY_DATA,
    LIST_CHOOSED_MANUFACTURERS,
    ADD_NEW_CHOOSED_MANUFACTURER,
    REMOVE_ALL_LIST_CHOOSED_MANUFACTURERS,
    REMOVE_CHOOSED_MANUFACTURER,
    IS_CHOOSED_MANUFACTURER,
    SET_CURRENT_CATEGORY_INFO,
    LIST_MANUFACTURERS,
    TWO_BANNERS,
    SLIDER,
} from '../module-types/category';
import { getCategoryData } from '@/api/category';

export const state = {
    data: null,
    isFetchCategoryData: false,
    listChoosedManufacturers: [],
    currentCategoryInfo: null,
}

export const getters = {
    [IS_FETCH_CATEGORY_DATA](state) {
        return state.isFetchCategoryData === true;
    },
    [LIST_CHOOSED_MANUFACTURERS](state) {
        return state.listChoosedManufacturers;
    },
    [IS_CHOOSED_MANUFACTURER]: (state) => (payload) => {
        if (Number.isInteger(payload?.value) === true) {
            return state.listChoosedManufacturers.findIndex(manu => payload.value === manu.id) >= 0;
        }

        return false;
    },
    [LIST_MANUFACTURERS](state) {
        return Array.isArray(state.currentCategoryInfo?.listManufactures) === true ? state.currentCategoryInfo?.listManufactures : [];
    },
    [TWO_BANNERS](state) {
        return Array.isArray(state.currentCategoryInfo?.twoBanners) === true ? state.currentCategoryInfo?.twoBanners : [];
    },
    [SLIDER](state) {
        return Array.isArray(state.currentCategoryInfo?.slider) === true ? state.currentCategoryInfo?.slider : [];
    }
}

export const mutations = {
    [SET_CATEGORY_DATA](state, payload) {
        if (isNullOrUndefined(payload?.value) === false) {
            state.data = payload.value;
        }
    },
    [SET_IS_FETCH_CATEGORY_DATA](state, payload) {
        state.isFetchCategoryData = payload?.value;
    },
    [ADD_NEW_CHOOSED_MANUFACTURER](state, payload) {
        if (payload?.value) {
            state.listChoosedManufacturers = [
                ...state.listChoosedManufacturers,
                {
                    ...payload.value,
                    isCheck: true,
                }
            ];
        }
    },
    [REMOVE_ALL_LIST_CHOOSED_MANUFACTURERS](state) {
        state.listChoosedManufacturers = [];
    },
    [REMOVE_CHOOSED_MANUFACTURER](state, payload) {
        if (Number.isInteger(payload?.value) === true) {
            state.listChoosedManufacturers = state.listChoosedManufacturers.filter(manu => payload.value !== manu.id);
        }
    },
    [SET_CURRENT_CATEGORY_INFO](state, payload) {
        if (state.data && Number.isInteger(payload?.value) === true) {
            state.currentCategoryInfo = state.data.find(cate => cate.categoryId === payload.value);
        }
    }
}

export const actions = {
    [FETCH_CATEGORY_DATA]({ commit }) {
        return new Promise((resolve, reject) => {
            getCategoryData().then((data) => {
                commit(SET_CATEGORY_DATA, { value: data });
                commit(SET_IS_FETCH_CATEGORY_DATA, { value: true });
                resolve();
            }).catch(() => {
                reject();
            });
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