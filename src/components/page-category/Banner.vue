<template>
    <div class="banner">
        <slider/>
        <two-banners/>
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
}
</script>