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
            <img style="cursor:pointer" :src="banner.imageUrl" alt="M51" width="390" height="80"/>
        </a>         
    </div>
</template>

<script>
import { CATEGORY_MODULE } from '@/store/module-types/category'
import { mapGetters } from 'vuex'
import { TWO_BANNERS } from '@/store/module-types/category';
export default {
    computed: {
        ...mapGetters(CATEGORY_MODULE, [TWO_BANNERS]),
    }
}
</script>