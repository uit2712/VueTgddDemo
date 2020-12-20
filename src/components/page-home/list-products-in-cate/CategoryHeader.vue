<template>
    <div class="navigat" :class="[ `cate` + category.categoryId]">
        <h2>{{ category.featuredText }}</h2>
        <div class="viewallcat">
            <a
                v-for="(product, index) in category.listFeaturedProducts"
                :key="index"
                :href="product.link"
                v-html="product.text"
            ></a>
        </div>
        <model-info-popover
            :id="`category-header-${category.categoryId}`"
            v-bind="{
                responseData: model,
                apiUrl: $apiLinkType.categoryHeaderApiLink.apiUrl,
                modelUrl: $apiLinkType.categoryHeaderApiLink.modelUrl,
                title: 'Category Header Model',
                iconCustomStyle: `position:absolute; top: 930px; right: -10px; z-index:9`,
                variant: 'warning',
            }"
        />
    </div>
</template>

<script>
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';
import { categoryDetailModel } from '@/models/home';

export default {
    components: {
        ModelInfoPopover,
    },
    props: {
        category: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: false,
            default: 0,
        }
    },
    computed: {
        model() {
            return categoryDetailModel;
        }
    }
}
</script>