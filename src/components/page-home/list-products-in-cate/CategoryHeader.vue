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
            id="category-header"
            v-bind="{
                responseData: model,
                apiUrl: $apiLinkType.listTwoBannersApiLink,
                title: 'Category Header Model',
                iconCustomStyle: 'position:absolute; top: 974px; right: -10px; z-index:9',
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
        }
    },
    computed: {
        model() {
            return categoryDetailModel;
        }
    }
}
</script>