import { isNullOrUndefined } from '@/common/functions';
import {
    FETCH_CATEGORY_DATA,
    SET_CATEGORY_DATA,
    SET_IS_FETCH_CATEGORY_DATA,
    IS_FETCH_CATEGORY_DATA,
    LIST_CHOOSED_FILTERS,
    ADD_NEW_CHOOSED_FILTER,
    REMOVE_ALL_LIST_CHOOSED_FILTERS,
    REMOVE_CHOOSED_FILTER,
    IS_CHOOSED_MANUFACTURER,
    SET_CURRENT_CATEGORY_INFO,
    LIST_MANUFACTURERS,
    TWO_BANNERS,
    SLIDER,
    LIST_PRODUCTS,
    SET_FILTERED_LIST_PRODUCTS,
    FILTERED_LIST_PRODUCTS,
    LIST_PRICE_FILTER_LABELS,
    SELECTED_FILTER_PRICE_LABEL,
    SET_SELECTED_FILTER_PRICE_LABEL
} from '../module-types/category';
import { getCategoryData } from '@/api/category';
import Vue from 'vue';

export const state = {
    data: null,
    isFetchCategoryData: false,
    listChoosedFilter: [],
    currentCategoryInfo: null,
    filteredListProducts: [],
    selectedFilterPriceLabel: null,
}

export const getters = {
    [IS_FETCH_CATEGORY_DATA](state) {
        return state.isFetchCategoryData === true;
    },
    [LIST_CHOOSED_FILTERS](state) {
        return state.listChoosedFilter;
    },
    [IS_CHOOSED_MANUFACTURER]: (state) => (payload) => {
        if (Number.isInteger(payload?.value) === true) {
            return state.listChoosedFilter.findIndex(item => payload.value === item.id) >= 0;
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
    },
    [LIST_PRODUCTS](state) {
        return Array.isArray(state.currentCategoryInfo?.listProducts) === true ? state.currentCategoryInfo?.listProducts : [];
    },
    [FILTERED_LIST_PRODUCTS](state) {
        return state.filteredListProducts;
    },
    [LIST_PRICE_FILTER_LABELS](state) {
        return Array.isArray(state.currentCategoryInfo?.listPriceFilterLabels) === true ? state.currentCategoryInfo?.listPriceFilterLabels : [];
    },
    [SELECTED_FILTER_PRICE_LABEL](state) {
        return state.listChoosedFilter.find(item => item.id === -99999);
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
    [ADD_NEW_CHOOSED_FILTER](state, payload) {
        if (payload?.value) {
            const foundIndex = state.listChoosedFilter.findIndex(item => item.id === payload.value.id);
            if (foundIndex < 0) {
                state.listChoosedFilter.push(payload.value);
            } else {
                Vue.set(state.listChoosedFilter, foundIndex, payload.value);
            }
        }
    },
    [REMOVE_ALL_LIST_CHOOSED_FILTERS](state) {
        state.listChoosedFilter = [];
        state.selectedFilterPriceLabel = null;
    },
    [REMOVE_CHOOSED_FILTER](state, payload) {
        if (Number.isInteger(payload?.value) === true) {
            state.listChoosedFilter = state.listChoosedFilter.filter(item => payload.value !== item.id);
        }
    },
    [SET_CURRENT_CATEGORY_INFO](state, payload) {
        if (state.data && Number.isInteger(payload?.value) === true) {
            state.currentCategoryInfo = state.data.find(cate => cate.categoryId === payload.value);
        }
    },
    [SET_FILTERED_LIST_PRODUCTS](state, payload) {
        if (Array.isArray(payload.values) === true) {
            state.filteredListProducts = payload.values;
        }
    },
    [SET_SELECTED_FILTER_PRICE_LABEL](state, payload) {
        state.selectedFilterPriceLabel = payload?.value;
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