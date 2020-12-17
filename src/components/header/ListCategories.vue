<template>
    <fragment>
        <div class="wrap-nav">
            <nav>
                <!-- <a
                    v-for="(category, index) in CATEGORY_MENU"
                    :key="index"
                    href="/dtdd"
                    :title="category.title"
                >
                    <i :class="[category.iconClassName]"></i><b>{{ category.text }}</b>
                </a> -->
                <router-link
                    v-for="(category, index) in CATEGORY_MENU"
                    :key="index"
                    :to="{ name: 'cate', params: { categoryId: category.id }}"
                    :title="category.title"><i :class="[category.iconClassName]"
                >
                    </i><b>{{ category.text }}</b>
                </router-link>
            </nav>
        </div>
        <model-info-popover
            id="list-categories"
            v-bind="{
                responseData: firstCategory,
                apiUrl: $apiLinkType.listCategoriesApiLink.apiUrl,
                modelUrl: $apiLinkType.listCategoriesApiLink.modelUrl,
                title: 'Category Menu Item Model',
                iconCustomStyle: 'position: absolute; top: 52px; right: 44px; z-index:9',
            }"
        />
    </fragment>
</template>

<script>
import { HOME_MODULE, CATEGORY_MENU } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';
import {  } from 'vue-router';

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