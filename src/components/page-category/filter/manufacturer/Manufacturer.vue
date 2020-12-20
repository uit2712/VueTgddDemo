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
        <model-info-popover
            id="manu-filter"
            v-bind="{
                responseData: firstManu,
                apiUrl: $apiLinkType.listManuApiLink.apiUrl,
                modelUrl: $apiLinkType.listManuApiLink.modelUrl,
                title: 'Manufacturer Model',
                iconCustomStyle: 'position:absolute; top: 200px; right:0; z-index:9',
                variant: 'warning',
            }"
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
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ManufacturerItem,
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [
            IS_CHOOSED_MANUFACTURER,
            LIST_MANUFACTURERS,
        ]),
        firstManu() {
            return this.LIST_MANUFACTURERS?.length > 0 ? this.LIST_MANUFACTURERS[0] : {};
        }
    },
    methods: {
        ...mapMutations(CATEGORY_MODULE, [
            ADD_NEW_CHOOSED_FILTER,
            REMOVE_CHOOSED_FILTER,
        ]),
    },
}
</script>