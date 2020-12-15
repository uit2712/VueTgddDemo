<template>
    <a
        v-if="item"
        href="javascript:void(0)"
        :data-id="item.id"
        @click="REMOVE_CHOOSED_FILTER({ value: item.id })"
    >
        {{ item.name }} <i class="icontgdd-clearfil"></i>
    </a>
</template>

<script>
import { CATEGORY_MODULE, REMOVE_CHOOSED_FILTER } from '@/store/module-types/category'
import { mapMutations } from 'vuex'
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapMutations(CATEGORY_MODULE, [REMOVE_CHOOSED_FILTER]),
    },
}
</script>