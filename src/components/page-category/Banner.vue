<template>
    <div class="banner">
        <slider :sliderInfo="sliderInfo"/>
        <two-banners :listBanners="listBanners"/>
    </div>
</template>

<script>
import Slider from './slider/Slider.vue';
import TwoBanners from './TwoBanners.vue';

export default {
    components: {
        Slider,
        TwoBanners,
    },
    props: {
        sliderInfo: {
            required: false,
            default: () => [],
        },
        listBanners: {
            required: false,
            default: () => [],
        }
    }
}
</script>