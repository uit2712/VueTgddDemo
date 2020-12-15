<template>
    <div class="manu manu15">
        <manufacturer-item
            v-for="(item, index) in listManufactures"
            :key="index"
            :item="item"
            :initIsChecked="IS_CHOOSED_MANUFACTURER({ value: item.id })"
            @select="ADD_NEW_CHOOSED_MANUFACTURER({ value: $event })"
            @unselect="REMOVE_CHOOSED_MANUFACTURER({ value: $event.id })"
        />
    </div>
</template>

<script>
import {
    ADD_NEW_CHOOSED_MANUFACTURER,
    CATEGORY_MODULE,
    REMOVE_CHOOSED_MANUFACTURER,
    IS_CHOOSED_MANUFACTURER
} from '@/store/module-types/category';
import { mapGetters, mapMutations } from 'vuex';
import ManufacturerItem from './ManufacturerItem.vue';

export default {
    components: {
        ManufacturerItem
    },
    props: {
        listManufactures: {
            required: false,
            default: () => [],
        }
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [IS_CHOOSED_MANUFACTURER]),
    },
    methods: {
        ...mapMutations(CATEGORY_MODULE, [
            ADD_NEW_CHOOSED_MANUFACTURER,
            REMOVE_CHOOSED_MANUFACTURER,
        ]),
    },
}
</script>