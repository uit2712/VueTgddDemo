<template>
    <fragment>
        <fragment v-for="category in LIST_CATEGORIES" :key="category.categoryId">
            <category-header :category="category"/>
            <list-products
                :listProducts="category.listProducts"
                :listProductsClassNames="category.listProductsClassNames"
            />
        </fragment>
    </fragment>
</template>

<script>
import { HOME_MODULE, LIST_CATEGORIES } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import CategoryHeader from './CategoryHeader.vue';
import ListProducts from './list-products/ListProducts.vue';

export default {
    components: {
        CategoryHeader,
        ListProducts,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [LIST_CATEGORIES]),
    }
}
</script>