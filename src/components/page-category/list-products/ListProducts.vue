<template>
    <ul class="homeproduct item2020">
        <product-item
            v-for="item in FILTERED_LIST_PRODUCTS"
            :key="JSON.stringify(item)"
            :item="item"
        />
    </ul>
</template>

<script>
import { CATEGORY_MODULE, FILTERED_LIST_PRODUCTS } from '@/store/module-types/category'
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem.vue'

export default {
    components: {
        ProductItem,
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [FILTERED_LIST_PRODUCTS]),
    }
}
</script>