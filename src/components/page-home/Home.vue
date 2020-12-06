<template>
    <fragment>
        <header-vue/>
        <section>
            <home-banner/>
            <home-news/>
            <div class="clr"></div>
            <promotion-banner/>
            <list-shocked-products/>
            <list-products-in-cate/>
        </section>
    </fragment>
</template>

<script>
import HeaderVue from './header/Header.vue';
import HomeBanner from './home-banner/HomeBanner.vue';
import HomeNews from './home-news/HomeNews.vue';
import ListProductsInCate from './list-products-in-cate/ListProductsInCate.vue';
import ListShockedProducts from './list-shocked-products/ListShockedProducts.vue';
import PromotionBanner from './PromotionBanner.vue';

export default {
    components: {
        HeaderVue,
        HomeBanner,
        HomeNews,
        PromotionBanner,
        ListShockedProducts,
        ListProductsInCate,
    }
}
</script>

<style>
@import '../../../public/css/home.css';
/* @import '../../../public/css/top-header.css';
@import '../../../public/css/list-categories.css';
@import '../../../public/css/header.css'; */
</style>