<template>
    <div v-if="isOldProduct === true" id="owl-promo-old" class="owl-carousel homepromo owl-theme" style="opacity: 1; display: block;">
        <div class="owl-wrapper-outer">
            <div class="owl-wrapper" style="width: 7200px; left: 0px; display: block; transition: all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px);" id="123">
                <component :is="currentProductComponent"
                    v-for="product in listProducts"
                    :key="product.productId"
                    :product="{
                        ...product,
                        isWrappedInOwl: isWrappedInOwl === true
                    }"
                />
            </div>
        </div>
        <div class="owl-controls clickable">
            <div class="owl-buttons">
                <div class="owl-prev">‹</div>
                <div class="owl-next">›</div>
            </div>
        </div>
    </div>
    <ul v-else-if="isWrappedInOwl === true" :class="[listProductsClassNames]">
        <div class="owl-wrapper-outer">
            <div class="owl-wrapper" style="width: 7680px; left: 0px; display: block;">
                <component :is="currentProductComponent"
                    v-for="product in listProducts"
                    :key="product.productId"
                    :product="{
                        ...product,
                        isWrappedInOwl: isWrappedInOwl === true
                    }"
                />
            </div>
            <div class="owl-controls clickable">
                <div class="owl-buttons">
                    <div class="owl-prev">‹</div>
                    <div class="owl-next">›</div>
                </div>
            </div>
        </div>
    </ul>
    <ul v-else :class="[listProductsClassNames]">
        <component :is="currentProductComponent"
            v-for="product in listProducts"
            :key="product.productId"
            :product="{
                ...product,
                isWrappedInOwl: isWrappedInOwl === true
            }"
        />
    </ul>
</template>

<script>
import OldProduct from './OldProduct.vue';
import ProductWrappedInDiv from './ProductWrappedInDiv.vue';
import ProductWrappedInLi from './ProductWrappedInLi.vue';

export default {
    components: {
        ProductWrappedInLi,
        ProductWrappedInDiv,
        OldProduct,
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
        },
        isWrappedInOwl: {
            type: Boolean,
            required: false,
            default: false
        },
        isLikeShockedProduct: {
            type: Boolean,
            required: false,
            default: false
        },
        isOldProduct: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            currentProductComponent: null,
        }
    },
    created() {
        if (this.isOldProduct === true) {
            this.currentProductComponent = OldProduct;
        } else {
            if (this.isWrappedInOwl === true) {
                this.currentProductComponent = ProductWrappedInDiv;
            } else {
                this.currentProductComponent = ProductWrappedInLi;
            }
        }
    },
}
</script>
<style scoped>
.is-empty {
    z-index: -1;
}
</style>