<template>
    <div class="choosedfilter">
        <choosed-filter-item
            v-for="item in LIST_CHOOSED_MANUFACTURERS"
            :key="JSON.stringify(item)"
            :item="item"
        />
        <a v-if="LIST_CHOOSED_MANUFACTURERS.length >= 2" class="reset" href="javascript:void(0)" @click="REMOVE_ALL_LIST_CHOOSED_MANUFACTURERS">Xóa tất cả<i class="icontgdd-clearfil"></i></a>
    </div>
</template>

<script>
import { CATEGORY_MODULE, LIST_CHOOSED_MANUFACTURERS, REMOVE_ALL_LIST_CHOOSED_MANUFACTURERS } from '@/store/module-types/category';
import { mapGetters, mapMutations } from 'vuex';
import ChoosedFilterItem from './ChoosedFilterItem.vue';

export default {
    components: {
        ChoosedFilterItem
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [LIST_CHOOSED_MANUFACTURERS]),
    },
    methods: {
        ...mapMutations(CATEGORY_MODULE, [REMOVE_ALL_LIST_CHOOSED_MANUFACTURERS]),
    },
}
</script>