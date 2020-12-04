<template>
    <div class="twobanner">
        <a
            v-for="(banner, index) in TWO_BANNERS"
            :key="index"
            :class="{ 'first-banner': index === 0 }"
            aria-label="slide"
            :href="banner.link"
        >
            <img
                style="cursor: pointer"
                :src="banner.imageUrl"
                alt="M51"
                width="398"
                height="110"
            />
        </a>
    </div>
</template>

<script>
import { FETCH_TWO_BANNERS, HOME_MODULE, TWO_BANNERS } from '@/store/module-types/home';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(HOME_MODULE, [TWO_BANNERS]),
    },
    created() {
        this.$store.dispatch(`${HOME_MODULE}/${FETCH_TWO_BANNERS}`);
    }
};
</script>

<style scoped>
a.first-banner {
    margin: 0 !important;
}
</style>