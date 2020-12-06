<template>
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
                <label class="preorder">{{ product.preorderText }}</label>
                <h3>{{ product.name }}</h3>
                <div class="props">
                    <span class="dotted" v-for="(prop, index) in product.listProperties" :key="index">{{ prop }}</span>
                </div>

                <h6 v-if="product.productStatusText" class="textkm">{{ product.productStatusText }}</h6>
                <div v-if="isHasDiscountPrice" class="price">
                    <strong>{{ product.discountPrice | formatCurrency }}</strong>
                    <span>{{ product.originalPrice | formatCurrency }}</span>
                    <i>-{{ product.discountPercent | formatPercent }}</i>
                </div>
                <div v-else class="price">
                    <strong>{{ product.originalPrice | formatCurrency }}</strong>
                </div>
                <div class="promo noimage">
                    <p>{{ product.promotionText }}</p>
                </div>
                <img
                    :src="product.otherInfoIconUrl"
                    class="icon-imgNew cate42 left lazyloaded"
                />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    computed: {
        isHasDiscountPrice() {
            return this.product?.discountPrice > 0;
        }
    },
};
</script>