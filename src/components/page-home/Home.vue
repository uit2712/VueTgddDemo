<template>
    <fragment>
        <header-vue/>
        <section>
            <home-banner/>
            <home-news/>
        </section>
    </fragment>
</template>

<script>
import HeaderVue from './header/Header.vue';
import HomeBanner from './home-banner/HomeBanner.vue';
import HomeNews from './home-news/HomeNews.vue';

export default {
    components: {
        HeaderVue,
        HomeBanner,
        HomeNews,
    }
}
</script>

<style>
@import '../../../public/css/home.css';
/* @import '../../../public/css/top-header.css';
@import '../../../public/css/list-categories.css';
@import '../../../public/css/header.css'; */
</style>