<template>
    <fragment>
        <figure>
            <h2><a :href="firstCategory.categoryLink">{{ firstCategory.categoryName }}</a></h2>
            <b></b>
        </figure>
        <ul>
            <li v-for="(post, index) in firstCategory.listPosts" :key="index">
                <a :href="post.postUrl">
                    <img
                        width="100"
                        height="70"
                        :src="post.imageUrl"
                        :alt="post.title"
                    />
                    <h3>{{ post.title }}</h3>
                    <span>{{ post.createdTime }}</span>
                </a>
            </li>
        </ul>
        <model-info-popover
            id="specific-news"
            v-bind="{
                responseData: firstCategory,
                apiUrl: $apiLinkType.listHomeBannerDescriptionsApiLink,
                title: 'Specific News Model',
                iconCustomStyle: 'position:absolute; top: 10px; right:0; z-index:9',
            }"
        />
    </fragment>
</template>

<script>
import { FETCH_LIST_TECH_NEWS, HOME_MODULE, LIST_TECH_NEWS } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [LIST_TECH_NEWS]),
        firstCategory() {
            return this.LIST_TECH_NEWS[0];
        }
    },
    created() {
        this.$store.dispatch(`${HOME_MODULE}/${FETCH_LIST_TECH_NEWS}`);
    }
}
</script>

<style scoped>
figure, ul {
    margin: 0px !important;
}
</style>