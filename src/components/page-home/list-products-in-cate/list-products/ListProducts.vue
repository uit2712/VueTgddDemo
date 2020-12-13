<template>
    <div v-if="isOldProduct === true" id="owl-promo-old" class="owl-carousel homepromo owl-theme" style="opacity: 1; display: block;">
        <div class="owl-wrapper-outer">
            <div class="owl-wrapper" style="width: 7200px; left: 0px; display: block; transition: all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px);" id="123">
                <old-product
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
    <ul v-else :class="[listProductsClassNames]">
        <div v-if="isWrappedInOwl === true" class="owl-wrapper-outer">
            <div class="owl-wrapper" style="width: 7648px; left: 0px; display: block; transition: all 0ms ease 0s; transform: translate3d(0px, 0px, 0px);">
                <fragment v-if="isLikeShockedProduct === true">
                    <div v-for="product in listProducts" :key="product.productId" class="owl-item" style="width: 239px;" :class="{ 'is-empty': !product.productId }">
                        <product-wrapped-in-div
                            :product="{
                                ...product,
                                isWrappedInOwl: isWrappedInOwl === true
                            }"
                        />
                    </div>
                </fragment>
                <fragment>
                    <div v-for="product in listProducts" :key="product.productId" class="owl-item" style="width: 239px;" :class="{ 'is-empty': !product.productId }">
                        <product-wrapped-in-li
                            :product="{
                                ...product,
                                isWrappedInOwl: isWrappedInOwl === true
                            }"
                        />
                    </div>
                </fragment>
            </div>
        </div>
        <fragment v-else>
            <product-wrapped-in-li
                v-for="product in listProducts"
                :key="product.productId"
                :product="{
                    ...product,
                    isWrappedInOwl: isWrappedInOwl === true
                }"
            />
        </fragment>
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
    }
}
</script>
<style scoped>
.is-empty {
    z-index: -1;
}
</style>