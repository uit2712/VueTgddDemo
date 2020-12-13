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
        <footer-vue/>
    </fragment>
</template>

<script>
import { FETCH_HOME_DATA, HOME_MODULE } from '@/store/module-types/home';
import HeaderVue from './header/Header.vue';
import HomeBanner from './home-banner/HomeBanner.vue';
import HomeNews from './home-news/HomeNews.vue';
import ListProductsInCate from './list-products-in-cate/ListProductsInCate.vue';
import ListShockedProducts from './list-shocked-products/ListShockedProducts.vue';
import PromotionBanner from './PromotionBanner.vue';
import FooterVue from './footer/Footer.vue';
import { FETCH_FOOTER_DATA, FOOTER_MODULE } from '@/store/module-types/footer';

export default {
    components: {
        HeaderVue,
        HomeBanner,
        HomeNews,
        PromotionBanner,
        ListShockedProducts,
        ListProductsInCate,
        FooterVue,
    },
    created() {
        this.$store.dispatch(`${HOME_MODULE}/${FETCH_HOME_DATA}`);
        this.$store.dispatch(`${FOOTER_MODULE}/${FETCH_FOOTER_DATA}`);
    },
}
</script>

<style>
@import '../../../public/css/home.css';
</style>