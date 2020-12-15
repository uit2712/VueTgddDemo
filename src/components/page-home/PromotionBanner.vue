<template>
    <div v-if="PROMOTION_BANNER" class="promotebanner b1">
        <a
            aria-label="slide"
            data-cate="0"
            data-place="1197"
            :href="PROMOTION_BANNER.link"
            onclick="jQuery.ajax({ url: 'https://www.thegioididong.com/bannertracking?bid=38852&amp;r='+ (new Date).getTime(), async: true, cache: false });"
            ><img
                style="cursor: pointer"
                v-lazy="PROMOTION_BANNER.imageUrl"
                :alt="PROMOTION_BANNER.description"
                width="1200"
                height="75"
        /></a>
        <model-info-popover
            id="promotion-banner"
            v-bind="{
                responseData: PROMOTION_BANNER,
                apiUrl: $apiLinkType.promotionBannerApiLink,
                title: 'Promotion Banner Model',
                iconCustomStyle: 'position:absolute; top: 374px; right:0; z-index:9',
                variant: 'dark',
            }"
        />
    </div>
</template>

<script>
import { HOME_MODULE, PROMOTION_BANNER } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover
    },
    computed: {
        ...mapGetters(HOME_MODULE, [PROMOTION_BANNER]),
    },
};
</script>