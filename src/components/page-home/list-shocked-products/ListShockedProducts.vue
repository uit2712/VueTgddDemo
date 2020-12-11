<template>
    <div class="">
        <div
            id="owl-promo"
            class="owl-carousel homepromo item2020 weekend owl-theme"
            style="opacity: 1; display: block"
        >
            <div class="owl-wrapper-outer">
                <div
                    class="owl-wrapper"
                    style="width: 10560px; left: 0px; display: block"
                >
                    <shocked-product
                        v-for="(product, index) in LIST_SHOCKED_PRODUCTS"
                        :key="index"
                        :product="{
                            ...product,
                            index,
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
        <model-info-popover
            id="list-shocked-products"
            v-bind="{
                responseData: model,
                apiUrl: $apiLinkType.listTwoBannersApiLink,
                title: 'Product Model',
                iconCustomStyle: 'position: absolute; top: 495px; right: 5px; z-index: 9',
                variant: 'warning',
                placement: 'left'
            }"
        />
    </div>
</template>

<script>
import { HOME_MODULE, LIST_SHOCKED_PRODUCTS } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ShockedProduct from './ShockedProduct.vue';
import { productModel } from '@/models/home';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ShockedProduct,
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [LIST_SHOCKED_PRODUCTS]),
        model() {
            return productModel;
        }
    },
};
</script>