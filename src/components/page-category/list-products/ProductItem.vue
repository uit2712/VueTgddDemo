<template>
    <li :class="{ feature: item.isFeatured === true }" :data-id="item.productId">
        <a :href="item.link" class="vertion2020">
            <div v-if="item.isFeatured === false" class="heightlabel">
                <label v-if="item.installment >= 0" class="installment">Trả góp <b>{{ item.installment | formatPercent }}</b></label>            
            </div>
            <img v-if="item.imageUrl" width="600" height="275" :data-original="item.imageUrl" class="lazyloaded" :alt="item.name" v-lazy="item.imageUrl">
            <div v-if="item.isFeatured === true" class="heightlabel">
                <aside v-if="item.label" class="result-label" :class="[item.label.className]">
                    <img v-lazy="item.label.iconUrl" class="imgresult lazyloaded">
                    <span class="text">{{ item.label.text }}</span>
                </aside>
                <label v-if="item.installment >= 0" class="installment">Trả góp <b>{{ item.installment | formatPercent }}</b></label>            
            </div>
            <aside v-if="item.isFeatured === false && item.label" class="result-label" :class="[item.label.className]">
                <img v-lazy="item.label.iconUrl" class="imgresult lazyloaded">
                <span class="text">{{ item.label.text }}</span>
            </aside>
            <h3>{{ item.name }}</h3>
            <div class="props">
                <span class="dotted" v-for="(prop, index) in item.listProperties" :key="index">{{ prop }}</span>
            </div>
            <h6 v-if="item.productStatusText" class="textkm">{{ item.productStatusText }}</h6>
            <div v-if="isHasDiscountPrice" class="price">
                <strong>{{ item.discountPrice | formatCurrency }}</strong>
                <span>{{ item.originalPrice | formatCurrency }}</span>
                <i v-if="item.discountPercent > 0">-{{ item.discountPercent | formatPercent }}</i>
            </div>
            <div v-else class="price">
                <strong>{{ item.originalPrice | formatCurrency }}</strong>
            </div>
            <div v-if="item.promotionText" class="promo noimage" v-html="item.promotionText"></div>
            <div v-if="item.rating" class="ratingresult">
                <i :class="{ 'icontgdd-ystar': star < totalStars, 'icontgdd-gstar': star >= totalStars }" v-for="star in listMaxStars" :key="star"></i>
                <span>{{ totalRatings }} đánh giá</span>
            </div>
            <img
                v-if="item.otherInfoIconUrl"
                :data-original="item.otherInfoIconUrl"
                v-lazy="item.otherInfoIconUrl"
                class="icon-imgNew cate42 left lazyloaded"
            />
        </a>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    computed: {
        isHasDiscountPrice() {
            return this.product?.discountPrice > 0;
        },
        totalStars() {
            if (!this.item.rating) {
                return 0;
            }

            return this.item.rating.totalStars;
        },
        totalRatings() {
            if (!this.item.rating) {
                return 0;
            }

            return this.item.rating.totalRatings;
        },
        listMaxStars() {
            return Array.from(Array(5).keys());
        }
    }
}
</script>