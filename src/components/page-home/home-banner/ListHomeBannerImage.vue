<template>
    <fragment>
        <div
            id="sync1"
            class="owl-carousel owl-theme"
            style="opacity: 1; display: block"
        >
            <div class="owl-wrapper-outer">
                <div
                    class="owl-wrapper"
                    style="
                        width: 11060px;
                        left: 0px;
                        display: block;
                        transition: all 800ms ease 0s;
                        transform: translate3d(-3160px, 0px, 0px);
                    "
                >
                    <div
                        v-for="(banner, index) in LIST_SLIDERS"
                        :key="index"
                        class="owl-item"
                        style="width: 790px"
                    >
                        <div class="item">
                            <a
                                aria-label="slide"
                                data-cate="0"
                                data-place="212"
                                :href="banner.link"
                                onclick="jQuery.ajax({ url: 'https://www.thegioididong.com/bannertracking?bid=39074&amp;r='+ (new Date).getTime(), async: true, cache: false });"
                                ><img
                                    style="cursor: pointer"
                                    v-lazy="banner.url"
                                    :alt="banner.description"
                                    width="800"
                                    height="300"
                            /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="owl-controls clickable">
                <div class="owl-buttons">
                    <div class="owl-prev">‹</div>
                    <div class="owl-next">›</div>
                </div>
            </div>
        </div>
        <model-info-popover
            id="list-banner-image"
            v-bind="{
                responseData: firstHomeBanner,
                apiUrl: $apiLinkType.listHomeBannerImagesApiLink,
                title: 'Home Banner Image Model',
                iconCustomStyle: 'position:absolute; top: 0; right:0;z-index:9',
            }"
        />
    </fragment>
</template>

<script>
import {
    HOME_MODULE,
    LIST_SLIDERS,
} from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [LIST_SLIDERS]),
        firstHomeBanner() {
            return this.LIST_SLIDERS?.length > 0 ? this.LIST_SLIDERS[0] : {};
        }
    },
};
</script>

<style lang="scss" scoped>
</style>