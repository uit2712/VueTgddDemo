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
        <model-info-popover
            id="two-banners"
            v-bind="{
                responseData: firstBanner,
                apiUrl: $apiLinkType.listTwoBannersApiLink,
                title: 'Two Banners Model',
                iconCustomStyle: 'position:absolute; top: 132px; right:0; z-index:9',
                variant: 'warning',
            }"
        />
    </div>
</template>

<script>
import { FETCH_TWO_BANNERS, HOME_MODULE, TWO_BANNERS } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [TWO_BANNERS]),
        firstBanner() {
            return this.TWO_BANNERS[0];
        }
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