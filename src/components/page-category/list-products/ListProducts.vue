<template>
    <fragment>
        <ul class="homeproduct item2020">
            <product-item
                v-for="(item, index) in FILTERED_LIST_PRODUCTS"
                :key="JSON.stringify(item)"
                :item="{
                    ...item,
                    isVisible: index < totalProductsFirstTime
                }"
            />
        </ul>
        <a v-if="isShowButtonViewMore" href="javascript:More(false, 2)" class="viewmore">Xem thêm {{ totalRemainingProducts }} điện thoại</a>
    </fragment>
</template>

<script>
import { CATEGORY_MODULE, FILTERED_LIST_PRODUCTS } from '@/store/module-types/category';
import { mapGetters } from 'vuex';
import ProductItem from './ProductItem.vue';

export default {
    components: {
        ProductItem,
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [FILTERED_LIST_PRODUCTS]),
        totalProductsFirstTime() {
            return 28;
        },
        totalRemainingProducts() {
            return this.FILTERED_LIST_PRODUCTS.length - this.totalProductsFirstTime;
        },
        isShowButtonViewMore() {
            return this.totalRemainingProducts > 0;
        }
    }
}
</script>