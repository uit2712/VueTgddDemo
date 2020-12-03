<template>
    <aside class="homenews">
        <specific-news/>
        <two-banner/>
    </aside>
</template>

<script>
import SpecificNews from './SpecificNews.vue';
import TwoBanner from './TwoBanner.vue';

export default {
    components: {
        SpecificNews,
        TwoBanner,
    }
};
</script>