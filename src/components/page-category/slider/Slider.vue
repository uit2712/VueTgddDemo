<template>
    <div id="owl-home" class="owl-carousel owl-theme" style="opacity: 1; display: block;">
        <div class="owl-wrapper-outer">
            <div class="owl-wrapper" style="width: 14400px; left: 0px; display: block; transition: all 800ms ease 0s; transform: translate3d(-1600px, 0px, 0px);">
                <slider-item v-for="(item, index) in sliderInfo" :key="index" :item="item"/>
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
    </div>
</template>

<script>
import SliderItem from './SliderItem.vue';

export default {
    components: {
        SliderItem,
    },
    props: {
        sliderInfo: {
            required: false,
            default: () => [],
        }
    },
}
</script>