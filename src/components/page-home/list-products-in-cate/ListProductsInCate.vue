<template>
    <fragment>
        <fragment v-for="(category, index) in LIST_CATEGORIES" :key="category.categoryId">
            <category-header :category="category" :index="index"/>
            <list-products
                :listProducts="category.listProducts"
                :listProductsClassNames="category.listProductsClassNames"
                :isWrappedInOwl="category.isWrappedInOwl"
                :isLikeShockedProduct="category.isLikeShockedProduct"
                :isOldProduct="category.isOldProduct"
            />
            <model-info-popover
                :id="`list-products-${category.categoryId}`"
                v-bind="{
                    responseData: category,
                    apiUrl: $apiLinkType.listProductsInCateApiLink.apiUrl,
                    modelUrl: $apiLinkType.listProductsInCateApiLink.modelUrl,
                    title: 'Product Model',
                    iconCustomStyle: 'position:absolute; top: 974px; right: -10px; z-index:9',
                    variant: 'warning',
                }"
            />
        </fragment>
    </fragment>
</template>

<script>
import { HOME_MODULE, LIST_CATEGORIES } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import CategoryHeader from './CategoryHeader.vue';
import ListProducts from './list-products/ListProducts.vue';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        CategoryHeader,
        ListProducts,
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [LIST_CATEGORIES]),
    }
}
</script>