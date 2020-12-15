<template>
    <div class="fl price">
        <label>Chọn mức giá: </label>
        <a
            v-for="(label, index) in LIST_PRICE_FILTER_LABELS"
            :key="index"
            href="javascript:void(0)"
            :data-id="label.id"
            @click="filterPrice({ ...label, index })"
            :class="{ check: selectedIndex === index }"
        >
            {{ label.name }}
        </a>
    </div>
</template>

<script>
import { ADD_NEW_CHOOSED_FILTER, CATEGORY_MODULE, SELECTED_FILTER_PRICE_LABEL, LIST_PRICE_FILTER_LABELS, LIST_PRODUCTS, SET_FILTERED_LIST_PRODUCTS } from '@/store/module-types/category'
import { mapGetters } from 'vuex';
import _filter from '@/design-patterns/chain-of-responsibilities/filters';
import { priceFilter } from '@/design-patterns/chain-of-responsibilities/filters/price-filter';

export default {
    computed: {
        ...mapGetters(CATEGORY_MODULE, [
            LIST_PRICE_FILTER_LABELS,
            LIST_PRODUCTS,
            SELECTED_FILTER_PRICE_LABEL
        ]),
        selectedIndex() {
            return Number.isInteger(this.SELECTED_FILTER_PRICE_LABEL?.index) === true ? this.SELECTED_FILTER_PRICE_LABEL?.index : -1;
        }
    },
    methods: {
        filterPrice(label) {
            if (!label) {
                return;
            }

            this.$store.commit(`${CATEGORY_MODULE}/${ADD_NEW_CHOOSED_FILTER}`, { value: { ...label, id: -99999, actualId: label.id } });
            priceFilter.setPriceFilterId(label.id);
            this.$store.commit(`${CATEGORY_MODULE}/${SET_FILTERED_LIST_PRODUCTS}`, { values: _filter.filter(this.LIST_PRODUCTS) });
        }
    },
    watch: {
        SELECTED_FILTER_PRICE_LABEL: {
            deep: true,
            handler: function(value) {
                if (!value) {
                    priceFilter.setPriceFilterId(-1);
                    this.$store.commit(`${CATEGORY_MODULE}/${SET_FILTERED_LIST_PRODUCTS}`, { values: _filter.filter(this.LIST_PRODUCTS) });
                }
            }
        }
    }
}
</script>