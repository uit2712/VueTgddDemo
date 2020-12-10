<template>
    <fragment>
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
                        v-for="(slider, index) in LIST_SLIDERS"
                        :key="index"
                        class="owl-item"
                        style="width: 158px"
                    >
                        <div class="item">
                            <h3 v-html="slider.description"></h3>
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
    HOME_MODULE,
    LIST_SLIDERS,
} from '@/store/module-types/home';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(HOME_MODULE, [LIST_SLIDERS]),
        firstDescription() {
            return this.LIST_SLIDERS?.length > 0 ? this.LIST_SLIDERS[0] : {};
        }
    },
};
</script>