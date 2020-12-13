<template>
    <li v-if="product.isWrappedInOwl === true" :class="{ feature: product.isFeatured === true }" :data-id="product.productId">
        <a :href="product.link" class="vertion2020">
            <div v-if="product.isFeatured === false && product.installment >= 0" class="heightlabel">
                <label v-if="product.installment >= 0" class="installment">Trả góp <b>{{ product.installment | formatPercent }}</b></label>            
            </div>
            <img v-if="product.imageUrl" width="600" height="275" :data-original="product.imageUrl" class="lazyloaded" :alt="product.name" :src="product.imageUrl">
            <div v-if="product.isFeatured === true" class="heightlabel">
                <label v-if="product.installment >= 0" class="installment">Trả góp <b>{{ product.installment | formatPercent }}</b></label>            
            </div>
            <aside v-if="product.label" class="result-label" :class="[product.label.className]">
                <img v-if="product.label.iconUrl" :src="product.label.iconUrl" class="imgresult lazyloaded">
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
            <div v-if="product.promotionText" class="promo noimage" v-html="product.promotionText"></div>
            <div v-if="product.rating" class="ratingresult">
                <i :class="{ 'icontgdd-ystar': star < totalStars, 'icontgdd-gstar': star >= totalStars }" v-for="star in listMaxStars" :key="star"></i>
                <span>{{ totalRatings }} đánh giá</span>
            </div>
            <img
                v-if="product.otherInfoIconUrl"
                :data-original="product.otherInfoIconUrl"
                :src="product.otherInfoIconUrl"
                class="icon-imgNew cate42 left lazyloaded"
            />
        </a>
    </li>
    <li v-else :class="{ feature: product.isFeatured === true }" :data-id="product.productId">
        <a :href="product.link" class="vertion2020">
            <div v-if="product.isFeatured === false" class="heightlabel">
                <label v-if="product.installment >= 0" class="installment">Trả góp <b>{{ product.installment | formatPercent }}</b></label>            
            </div>
            <img v-if="product.imageUrl" width="600" height="275" :data-original="product.imageUrl" class="lazyloaded" :alt="product.name" :src="product.imageUrl">
            <div v-if="product.isFeatured === true" class="heightlabel">
                <aside v-if="product.label" class="result-label" :class="[product.label.className]">
                    <img :src="product.label.iconUrl" class="imgresult lazyloaded">
                    <span class="text">{{ product.label.text }}</span>
                </aside>
                <label v-if="product.installment >= 0" class="installment">Trả góp <b>{{ product.installment | formatPercent }}</b></label>            
            </div>
            <aside v-if="product.isFeatured === false && product.label" class="result-label" :class="[product.label.className]">
                <img :src="product.label.iconUrl" class="imgresult lazyloaded">
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
            <div v-if="product.promotionText" class="promo noimage" v-html="product.promotionText"></div>
            <div v-if="product.rating" class="ratingresult">
                <i :class="{ 'icontgdd-ystar': star < totalStars, 'icontgdd-gstar': star >= totalStars }" v-for="star in listMaxStars" :key="star"></i>
                <span>{{ totalRatings }} đánh giá</span>
            </div>
            <img
                v-if="product.otherInfoIconUrl"
                :data-original="product.otherInfoIconUrl"
                :src="product.otherInfoIconUrl"
                class="icon-imgNew cate42 left lazyloaded"
            />
        </a>
    </li>
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
    }
}
</script>