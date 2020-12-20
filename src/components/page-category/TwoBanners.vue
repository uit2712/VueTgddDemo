<template>
    <div class="right">
        <a
            v-for="(banner, index) in TWO_BANNERS"
            :key="index"
            aria-label="slide"
            data-cate="42"
            data-place="1210"
            :href="banner.link"
        >
            <img style="cursor:pointer" v-lazy="banner.imageUrl" alt="M51" width="390" height="80"/>
        </a>
        <model-info-popover
            id="two-banners"
            v-bind="{
                responseData: firstBanner,
                apiUrl: $apiLinkType.listTwoBannersApiLink.apiUrl,
                modelUrl: $apiLinkType.listTwoBannersApiLink.modelUrl,
                title: 'Two Banners Model',
                iconCustomStyle: 'position:absolute; top: 15px; right:0; z-index:9',
                variant: 'warning',
            }"
        />        
    </div>
</template>

<script>
import { CATEGORY_MODULE } from '@/store/module-types/category'
import { mapGetters } from 'vuex'
import { TWO_BANNERS } from '@/store/module-types/category';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [TWO_BANNERS]),
        firstBanner() {
            return this.TWO_BANNERS?.length > 0 ? this.TWO_BANNERS[0] : {};
        }
    }
}
</script>