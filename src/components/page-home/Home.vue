<template>
    <section>
        <home-banner/>
        <home-news/>
        <div class="clr"></div>
        <promotion-banner/>
        <list-shocked-products/>
        <list-products-in-cate/>
    </section>
</template>

<script>
import HomeBanner from './home-banner/HomeBanner.vue';
import HomeNews from './home-news/HomeNews.vue';
import ListProductsInCate from './list-products-in-cate/ListProductsInCate.vue';
import ListShockedProducts from './list-shocked-products/ListShockedProducts.vue';
import PromotionBanner from './PromotionBanner.vue';

export default {
    components: {
        HomeBanner,
        HomeNews,
        PromotionBanner,
        ListShockedProducts,
        ListProductsInCate,
    },
}
</script>

<style scoped>
@import '../../../public/css/home.css';
</style>