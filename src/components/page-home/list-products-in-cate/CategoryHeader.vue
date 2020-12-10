<template>
    <div class="navigat" :class="[ `cate` + category.categoryId]">
        <h2>{{ category.featuredText }}</h2>
        <div class="viewallcat">
            <a
                v-for="(product, index) in category.listFeaturedProducts"
                :key="index"
                :href="product.link">{{ product.name }}</a>
            <a
                v-if="category.seeMoreProductsInfo"
                :href="category.seeMoreProductsInfo.link"
                :class="category.seeMoreProductsInfo.className"
                v-html="category.seeMoreProductsInfo.text"
            ></a>
        </div>
        <model-info-popover
            id="category-header"
            v-bind="{
                responseData: category,
                apiUrl: $apiLinkType.listTwoBannersApiLink,
                title: 'Category Header Model',
                iconCustomStyle: 'position:absolute; top: 974px; right: -10px; z-index:9',
                variant: 'warning',
            }"
        />
    </div>
</template>

<script>
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    props: {
        category: {
            type: Object,
            required: false,
            default: () => ({
                categoryId: 42,
                featuredText: 'Điện thoại nổi bật nhất',
                listFeaturedProducts: [
                    {
                        name: 'Samsung Galaxy Note 20',
                        link: 'https://www.thegioididong.com/dtdd/samsung-galaxy-note-20'
                    },
                    {
                        name: 'iPhone 12 Pro Max',
                        link: 'https://www.thegioididong.com/dtdd/iphone-12-pro-max'
                    },
                    {
                        name: 'iPhone 12',
                        link: 'https://www.thegioididong.com/dtdd/iphone-12'
                    },
                    {
                        name: 'Redmi Note 9S',
                        link: 'https://www.thegioididong.com/dtdd/xiaomi-redmi-note-9s'
                    },
                    {
                        name: 'OPPO Reno4',
                        link: 'https://www.thegioididong.com/dtdd/oppo-reno4'
                    }
                ],
                seeMoreProductsInfo: {
                    link: '/dtdd',
                    className: 'mobile',
                    text: 'Xem tất cả <b>183</b> điện thoại',
                }
            })
        }
    },
}
</script>