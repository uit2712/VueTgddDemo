<template>
    <aside class="homebanner">
        <list-home-banner-image/>
        <list-home-banner-description/>
    </aside>
</template>

<script>
import ListHomeBannerDescription from './ListHomeBannerDescription.vue';
import ListHomeBannerImage from './ListHomeBannerImage.vue';

export default {
    components: {
        ListHomeBannerDescription,
        ListHomeBannerImage,
    },
};
</script>