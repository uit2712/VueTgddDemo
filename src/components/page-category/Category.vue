<template>
    <section class="cate cate42">
        <banner/>
        <filter-vue/>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Banner from './Banner.vue';
import { CATEGORY_MODULE, IS_FETCH_CATEGORY_DATA, FETCH_CATEGORY_DATA, SET_CURRENT_CATEGORY_INFO } from '@/store/module-types/category';
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
        ...mapGetters(CATEGORY_MODULE, [
            IS_FETCH_CATEGORY_DATA,
        ]),
    },
    created() {
        const vm = this;
        if (this.IS_FETCH_CATEGORY_DATA === false) {
            this.$store.dispatch(`${CATEGORY_MODULE}/${FETCH_CATEGORY_DATA}`)
                .then(() => {
                    this.$store.commit(`${CATEGORY_MODULE}/${SET_CURRENT_CATEGORY_INFO}`, { value: vm.categoryId });
                }).catch(() => {

                });
        } else {
            this.$store.commit(`${CATEGORY_MODULE}/${SET_CURRENT_CATEGORY_INFO}`, { value: vm.categoryId });
        }
    },
}
</script>
<style scoped>
@import '../../../public/css/category.css';
</style>