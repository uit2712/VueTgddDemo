<template>
    <ul :class="[listProductsClassNames]">
        <product v-for="product in listProducts" :key="product.productId" :product="product"/>
    </ul>
</template>

<script>
import Product from './Product.vue';

export default {
    components: {
        Product,
    },
    props: {
        listProducts: {
            required: false,
            default: () => [],
        },
        listProductsClassNames: {
            type: String,
            required: false,
            default: '',
        }
    }
}
</script>