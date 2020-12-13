<template>
    <div class="owl-item" style="width: 240px;">
        <div class="item">
            <a :href="product.link">
                <img width="150" height="150" :alt="product.name" :src="product.imageUrl">
                <div class="div-extend">
                    <span class="quantity">{{ product.remainingQuantity }}  máy</span>
                </div>
                <h3>{{ product.name }}</h3>
                <div v-if="isHasDiscountPrice === true" class="oldprice">
                    <span>Giá từ: </span>{{ product.discountPrice | formatCurrency }}
                    <span class="price-line">{{ product.originalPrice | formatCurrency }}</span>
                </div>
                <div v-else class="oldprice">
                    <span>Giá từ: </span>{{ product.originalPrice | formatCurrency }}
                </div>
                <label v-if="product.isNewProductStopSelling === true">{{ product.tag | upperCaseFirstLetter }} mới đã ngừng kinh doanh</label>
                <fragment v-else>
                    <label>Giá {{ product.tag }} mới:  <span>{{ product.newProductPrice | formatCurrency }}</span></label>
                    <label>
                        Rẻ hơn {{ product.tag }} mới: 
                        <span>{{ product.lowerThanNewProductPrice | formatCurrency }} ({{ product.lowerThanNewProductPercent | formatPercent }})</span>
                    </label>
                </fragment>
                <span class="labelshock-top">{{ product.shockedLabel }}</span>
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