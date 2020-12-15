import { isNullOrUndefined } from '@/common/functions';
import {
    FETCH_CATEGORY_DATA,
    SET_CATEGORY_DATA,
    CATEGORY_INFO_BY_ID,
    SET_IS_FETCH_CATEGORY_DATA,
    IS_FETCH_CATEGORY_DATA,
    LIST_CHOOSED_MANUFACTURERS,
    ADD_NEW_CHOOSED_MANUFACTURER,
    REMOVE_ALL_LIST_CHOOSED_MANUFACTURERS,
    REMOVE_CHOOSED_MANUFACTURER,
    IS_CHOOSED_MANUFACTURER,
} from '../module-types/category';
import { getCategoryData } from '@/api/category';

export const state = {
    data: null,
    isFetchCategoryData: false,
    listChoosedManufacturers: [],
}

export const getters = {
    [CATEGORY_INFO_BY_ID]: (state) => ({ id }) => {
        if (Array.isArray(state.data) === false) {
            return null;
        }

        return state.data.find(cate => cate.categoryId === id);
    },
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
}

export const actions = {
    [FETCH_CATEGORY_DATA]({ commit }) {
        getCategoryData().then((data) => {
            commit(SET_CATEGORY_DATA, { value: data });
            commit(SET_IS_FETCH_CATEGORY_DATA, { value: true });
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