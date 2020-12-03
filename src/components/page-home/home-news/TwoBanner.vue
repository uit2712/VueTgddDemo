<template>
    <div class="twobanner">
        <a
            class="first-banner"
            aria-label="slide"
            data-cate="0"
            data-place="1158"
            href="https://www.thegioididong.com/dtdd/samsung-galaxy-m51"
            onclick="jQuery.ajax({ url: 'https://www.thegioididong.com/bannertracking?bid=39703&amp;r='+ (new Date).getTime(), async: true, cache: false });"
            ><img
                style="cursor: pointer"
                src="https://cdn.tgdd.vn/2020/12/banner/M51-398-110-398x110.png"
                alt="M51"
                width="398"
                height="110"
        /></a>
        <a
            aria-label="slide"
            data-cate="0"
            data-place="1158"
            href="https://www.thegioididong.com/apple#iphone"
            onclick="jQuery.ajax({ url: 'https://www.thegioididong.com/bannertracking?bid=39617&amp;r='+ (new Date).getTime(), async: true, cache: false });"
            ><img
                style="cursor: pointer"
                src="https://cdn.tgdd.vn/2020/11/banner/398-110-398x110-2.png"
                alt="đt"
                width="398"
                height="110"
        /></a>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
a.first-banner {
    margin: 0 !important;
}
</style>