<template>
    <div id="owl-home" class="owl-carousel owl-theme" style="opacity: 1; display: block;">
        <div class="owl-wrapper-outer">
            <div class="owl-wrapper" style="width: 14400px; left: 0px; display: block; transition: all 800ms ease 0s; transform: translate3d(-1600px, 0px, 0px);">
                <slider-item v-for="(item, index) in SLIDER" :key="index" :item="item"/>
            </div>
        </div>
        <div class="owl-controls clickable">
            <div class="owl-pagination">
                <div class="owl-page"><span class=""></span></div>
                <div class="owl-page"><span class=""></span></div>
                <div class="owl-page active"><span class=""></span></div>
                <div class="owl-page"><span class=""></span></div>
                <div class="owl-page"><span class=""></span></div>
                <div class="owl-page"><span class=""></span></div>
                <div class="owl-page"><span class=""></span></div>
                <div class="owl-page"><span class=""></span></div>
                <div class="owl-page"><span class=""></span></div>
            </div>
            <div class="owl-buttons">
                <div class="owl-prev">‹</div>
                <div class="owl-next">›</div>
            </div>
        </div>
        <model-info-popover
            id="slider"
            v-bind="{
                responseData: firstSlider,
                apiUrl: $apiLinkType.sliderInCateApiLink.apiUrl,
                modelUrl: $apiLinkType.sliderInCateApiLink.modelUrl,
                title: 'Slider Item Model',
                iconCustomStyle: 'position: absolute; top: 0px; right: 0px; z-index:9',
            }"
        />
    </div>
</template>

<script>
import { CATEGORY_MODULE, SLIDER } from '@/store/module-types/category';
import { mapGetters } from 'vuex';
import SliderItem from './SliderItem.vue';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        SliderItem,
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [SLIDER]),
        firstSlider() {
            if (this.SLIDER.length > 0) {
                return this.SLIDER[0];
            }

            return {};
        }
    }
}
</script>