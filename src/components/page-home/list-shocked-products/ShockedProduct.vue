<template>
    <fragment>
        <div class="owl-item" style="width: 240px">
            <div class="item" data-index="1">
                <a
                    :href="product.link"
                    class="vertion2020 large"
                    data-s="0"
                >
                    <div class="heightlabel"></div>
                    <img
                        width="180"
                        height="180"
                        :src="product.imageUrl"
                        class="lazyloaded"
                        :alt="product.name"
                    />
                    <label v-if="product.preorderText" class="preorder">{{ product.preorderText }}</label>
                    <aside v-if="product.label" class="result-label temp2">
                        <img :src="product.label.imageUrl" class="imgresult lazyloaded">
                        <span class="text">{{ product.label.text }}</span>
                    </aside>
                    <h3>{{ product.name }}</h3>
                    <div class="props">
                        <span class="dotted" v-for="(prop, index) in product.listProperties" :key="index">{{ prop }}</span>
                    </div>

                    <h6 v-if="product.productStatusText" class="textkm">{{ product.productStatusText }}</h6>
                    <div v-if="isHasDiscountPrice" class="price">
                        <strong>{{ product.discountPrice | formatCurrency }}</strong>
                        <span>{{ product.originalPrice | formatCurrency }}</span>
                        <i v-if="product.discountPercent > 0">-{{ product.discountPercent | formatPercent }}</i>
                    </div>
                    <div v-else class="price">
                        <strong>{{ product.originalPrice | formatCurrency }}</strong>
                    </div>
                    <div class="promo noimage">
                        <p v-html="product.promotionText"></p>
                    </div>
                    <img
                        :src="product.otherInfoIconUrl"
                        class="icon-imgNew cate42 left lazyloaded"
                    />
                    <div v-if="product.rating" class="ratingresult">
                        <i :class="{ 'icontgdd-ystar': star < totalStars, 'icontgdd-gstar': star >= totalStars }" v-for="star in listMaxStars" :key="star"></i>
                        <span>{{ totalRatings }} đánh giá</span>
                    </div>
                </a>
            </div>
        </div>
        <model-info-popover
            :id="`shocked-product-${product.productId}`"
            v-bind="{
                responseData: product,
                apiUrl: $apiLinkType.listTwoBannersApiLink,
                title: 'Shocked Product Model',
                iconCustomStyle: `position: absolute; top: 50px; left: ${15 + 245 * product.productId}px; z-index: 9`,
                variant: 'warning',
            }"
        />
    </fragment>
</template>

<script>
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    computed: {
        isHasDiscountPrice() {
            return this.product?.discountPrice > 0;
        },
        totalStars() {
            if (!this.product.rating) {
                return 0;
            }

            return this.product.rating.totalStars;
        },
        totalRatings() {
            if (!this.product.rating) {
                return 0;
            }

            return this.product.rating.totalRatings;
        },
        listMaxStars() {
            return Array.from(Array(5).keys());
        }
    },
};
</script>