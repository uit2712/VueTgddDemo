<template>
    <fragment>
        <model-info-popover
            v-bind="{
                responseData: firstDescription,
                apiUrl: $apiLinkType.listHomeBannerDescriptionsApiLink,
                title: 'Home Banner Description Model'
            }"
            style="position:absolute; bottom: 0; right:0; z-index:9"
        />
        <div
            id="sync2"
            class="owl-carousel owl-theme"
            style="opacity: 1; display: block"
        >
            <div class="owl-wrapper-outer">
                <div
                    class="owl-wrapper"
                    style="
                        width: 2212px;
                        left: 0px;
                        display: block;
                        transition: all 200ms ease 0s;
                        transform: translate3d(-158px, 0px, 0px);
                    "
                >
                    <div
                        v-for="(desc, index) in LIST_HOME_BANNER_DESCRIPTIONS"
                        :key="index"
                        class="owl-item"
                        style="width: 158px"
                    >
                        <div class="item">
                            <h3 v-html="desc.text"></h3>
                            <i class="arrowbar"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </fragment>
</template>

<script>
import {
    FETCH_LIST_HOME_BANNER_DESCRIPTIONS,
    HOME_MODULE,
    LIST_HOME_BANNER_DESCRIPTIONS,
} from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [LIST_HOME_BANNER_DESCRIPTIONS]),
        firstDescription() {
            return this.LIST_HOME_BANNER_DESCRIPTIONS[0];
        }
    },
    created() {
        this.$store.dispatch(
            `${HOME_MODULE}/${FETCH_LIST_HOME_BANNER_DESCRIPTIONS}`
        );
    },
};
</script>