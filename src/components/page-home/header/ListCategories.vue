<template>
    <fragment>
        <div class="wrap-nav">
            <nav>
                <a
                    v-for="(category, index) in LIST_CATEGORIES"
                    :key="index"
                    href="/dtdd"
                    :title="category.title"
                >
                    <i :class="[category.iconClassName]"></i><b>{{ category.text }}</b>
                </a>
            </nav>
        </div>
        <model-info-popover
            id="list-categories"
            v-bind="{
                responseData: firstCategory,
                apiUrl: $apiLinkType.listCategoriesApiLink,
                title: 'Category Model',
                iconCustomStyle: 'position: absolute; top: 52px; right: 195px; z-index:9',
            }"
        />
    </fragment>
</template>

<script>
import { FETCH_LIST_CATEGORIES, HOME_MODULE, LIST_CATEGORIES } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [
            LIST_CATEGORIES,
        ]),
        firstCategory() {
            return this.LIST_CATEGORIES[0];       
        },
    },
    created() {
        this.$store.dispatch(`${HOME_MODULE}/${FETCH_LIST_CATEGORIES}`);
    },
}
</script>