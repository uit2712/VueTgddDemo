<template>
    <div class="right">
        <a
            v-for="(banner, index) in listBanners"
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
export default {
    props: {
        listBanners: {
            required: false,
            default: () =>[],
        }
    }
}
</script>