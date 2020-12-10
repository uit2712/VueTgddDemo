<template>
    <fragment>
        <div class="wrap-nav">
            <nav>
                <a
                    v-for="(category, index) in CATEGORY_MENU"
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
                iconCustomStyle: 'position: absolute; top: 52px; right: 44px; z-index:9',
            }"
        />
    </fragment>
</template>

<script>
import { HOME_MODULE, CATEGORY_MENU } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [
            CATEGORY_MENU,
        ]),
        firstCategory() {
            return this.CATEGORY_MENU?.length > 0 ? this.CATEGORY_MENU[0] : {};       
        },
    },
}
</script>