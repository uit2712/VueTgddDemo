<template>
    <fragment>
        <header-vue />
        <router-view />
        <footer-vue />
    </fragment>
</template>
<script>
import FooterVue from './components/footer/Footer.vue';
import HeaderVue from './components/header/Header.vue';
import { FETCH_FOOTER_DATA, FOOTER_MODULE } from './store/module-types/footer';
import { FETCH_HOME_DATA, HOME_MODULE } from './store/module-types/home';

export default {
    components: {
        FooterVue,
        HeaderVue,
    },
    created() {
        this.$store.dispatch(`${HOME_MODULE}/${FETCH_HOME_DATA}`);
        this.$store.dispatch(`${FOOTER_MODULE}/${FETCH_FOOTER_DATA}`);
    },
};
</script>
