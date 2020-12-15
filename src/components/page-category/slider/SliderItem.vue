<template>
    <div v-if="item" class="owl-item" style="width: 800px;">
        <a aria-label="slide" data-cate="42" data-place="1212" :href="item.link">
            <img style="cursor:pointer" :src="item.imageUrl" :alt="item.description" width="800" height="170"/>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    }
}
</script>