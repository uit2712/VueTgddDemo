<template>
    <div class="manu manu15">
        <manufacturer-item
            v-for="(item, index) in LIST_MANUFACTURERS"
            :key="index"
            :item="item"
            :initIsChecked="IS_CHOOSED_MANUFACTURER({ value: item.id })"
            @select="ADD_NEW_CHOOSED_FILTER({ value: $event })"
            @unselect="REMOVE_CHOOSED_FILTER({ value: $event.id })"
        />
    </div>
</template>

<script>
import {
    ADD_NEW_CHOOSED_FILTER,
    CATEGORY_MODULE,
    REMOVE_CHOOSED_FILTER,
    IS_CHOOSED_MANUFACTURER,
    LIST_MANUFACTURERS
} from '@/store/module-types/category';
import { mapGetters, mapMutations } from 'vuex';
import ManufacturerItem from './ManufacturerItem.vue';

export default {
    components: {
        ManufacturerItem
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [
            IS_CHOOSED_MANUFACTURER,
            LIST_MANUFACTURERS,
        ]),
    },
    methods: {
        ...mapMutations(CATEGORY_MODULE, [
            ADD_NEW_CHOOSED_FILTER,
            REMOVE_CHOOSED_FILTER,
        ]),
    },
}
</script>