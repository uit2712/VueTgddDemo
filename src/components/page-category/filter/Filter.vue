<template>
    <div class="filter">
        <manufacturer/>
        <price-filter/>
        <main-filter/>
        <div class="fl barpage">
            <a href="?s=moi-ra-mat" data-id="moi-ra-mat" class="">
            <i class="icontgdd-checkbox"></i> Mới
            </a>
            <a href="?s=tra-gop-0-phan-tram" data-id="tra-gop-0-phan-tram" class="">
            <i class="icontgdd-checkbox"></i> Trả góp 0%
            </a>
            <a href="?s=doc-quyen" data-id="doc-quyen" class="">
            <i class="icontgdd-checkbox"></i> Độc quyền
            <span class="n">MỚI</span>                </a>
        </div>
        <div class="fr sort">
            <span class="criteria">Sắp xếp</span>
            <div>
                <label class="closefilter"><i class="icontgdd-closefilter"></i></label>
                <a href="javascript:;" class="check" data-id="5"><i class="icontgdd-checklist"></i>Nổi bật nhất</a>
                <a href="javascript:;" data-id="6"><i class="icontgdd-checklist"></i>Bán chạy nhất</a>
                <a href="javascript:;" data-id="1"><i class="icontgdd-checklist"></i>Giá cao đến thấp</a>
                <a href="javascript:;" data-id="2"><i class="icontgdd-checklist"></i>Giá thấp đến cao</a>
            </div>
        </div>
        <choosed-filter/>
    </div>
</template>

<script>
import { CATEGORY_MODULE, LIST_CHOOSED_FILTERS, LIST_PRODUCTS, SET_FILTERED_LIST_PRODUCTS } from '@/store/module-types/category';
import { mapGetters } from 'vuex';
import ChoosedFilter from './choosed-filter/ChoosedFilter.vue';
import Manufacturer from './manufacturer/Manufacturer.vue';
import { manuFilter } from '@/design-patterns/chain-of-responsibilities/filters/manufacturer-filter';
import filter from '@/design-patterns/chain-of-responsibilities/filters';
import PriceFilter from './PriceFilter.vue';
import MainFilter from './main-filter/MainFilter.vue';

export default {
    components: {
        Manufacturer,
        ChoosedFilter,
        PriceFilter,
        MainFilter,
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [
            LIST_CHOOSED_FILTERS,
            LIST_PRODUCTS,
        ]),
    },
    watch: {
        LIST_CHOOSED_FILTERS: {
            deep: true,
            handler: function(values) {
                manuFilter.setListManufactures(values);
                this.$store.commit(`${CATEGORY_MODULE}/${SET_FILTERED_LIST_PRODUCTS}`, { values: filter.filter(this.LIST_PRODUCTS) });
            }
        }
    }
}
</script>