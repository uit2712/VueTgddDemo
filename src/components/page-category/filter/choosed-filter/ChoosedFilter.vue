<template>
    <div class="choosedfilter">
        <choosed-filter-item
            v-for="item in LIST_CHOOSED_FILTERS"
            :key="JSON.stringify(item)"
            :item="item"
        />
        <a v-if="LIST_CHOOSED_FILTERS.length >= 2" class="reset" href="javascript:void(0)" @click="REMOVE_ALL_LIST_CHOOSED_FILTERS">Xóa tất cả<i class="icontgdd-clearfil"></i></a>
    </div>
</template>

<script>
import { CATEGORY_MODULE, LIST_CHOOSED_FILTERS, REMOVE_ALL_LIST_CHOOSED_FILTERS } from '@/store/module-types/category';
import { mapGetters, mapMutations } from 'vuex';
import ChoosedFilterItem from './ChoosedFilterItem.vue';

export default {
    components: {
        ChoosedFilterItem
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [LIST_CHOOSED_FILTERS]),
    },
    methods: {
        ...mapMutations(CATEGORY_MODULE, [REMOVE_ALL_LIST_CHOOSED_FILTERS]),
    },
}
</script>