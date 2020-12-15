<template>
    <section class="cate cate42">
        <banner
            v-bind="{
                sliderInfo,
                listBanners,    
            }"
        />
        <filter-vue
            v-bind="{
                listManufactures
            }"
        />
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Banner from './Banner.vue';
import { CATEGORY_MODULE, CATEGORY_INFO_BY_ID, IS_FETCH_CATEGORY_DATA, FETCH_CATEGORY_DATA } from '@/store/module-types/category';
import FilterVue from './filter/Filter.vue';

export default {
    components: {
        Banner,
        FilterVue,
    },
    data() {
        return {
            categoryId: Number(this.$route.params.categoryId),
        }
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [CATEGORY_INFO_BY_ID, IS_FETCH_CATEGORY_DATA]),
        categoryInfo() {
            return this.CATEGORY_INFO_BY_ID({ id: this.categoryId });
        },
        sliderInfo() {
            return Array.isArray(this.categoryInfo?.slider) === true ? this.categoryInfo?.slider : [];
        },
        listBanners() {
            return Array.isArray(this.categoryInfo?.twoBanners) === true ? this.categoryInfo?.twoBanners : [];
        },
        listManufactures() {
            return Array.isArray(this.categoryInfo?.listManufactures) === true ? this.categoryInfo?.listManufactures : [];
        }
    },
    created() {
        if (this.IS_FETCH_CATEGORY_DATA === false) {
            this.$store.dispatch(`${CATEGORY_MODULE}/${FETCH_CATEGORY_DATA}`);
        }
    },
}
</script>
<style scoped>
@import '../../../public/css/category.css';
</style>