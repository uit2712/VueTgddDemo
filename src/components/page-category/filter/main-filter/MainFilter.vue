<template>
    <div class="fl feature" :class="{ expand: isCheck === true }">
        <span class="criteria" @click="check">Bộ lọc</span>
        <div class="property threecol">
            <a href="javascript:void(0)" class="closefilter" @click="check"><i class="icontgdd-closefilter"></i></a>
            <div v-for="(parentProp, index) in MAIN_FILTER" :key="index" class="prop">
                <strong>{{ parentProp.name }}</strong>
                <a v-for="(childProp) in parentProp.listChildProps" :key="childProp.propId" href="/dtdd?g=android" :data-id="childProp.propId">
                    <i class="icontgdd-checkbox"></i>
                    {{ childProp.name }}
                </a>
            </div>
        </div>
        <model-info-popover
            id="main-filter"
            v-bind="{
                responseData: firstMainFilterLabel,
                apiUrl: $apiLinkType.mainFilterLabelsApiLink.apiUrl,
                modelUrl: $apiLinkType.mainFilterLabelsApiLink.modelUrl,
                title: 'Manufacturer Model',
                iconCustomStyle: 'position:absolute; top: 12px; right: -20px; z-index:9',
                variant: 'warning',
            }"
        />
    </div>
</template>

<script>
import { checkMixin } from '@/mixins';
import { mapGetters } from 'vuex';
import { CATEGORY_MODULE, MAIN_FILTER } from '@/store/module-types/category';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    mixins: [checkMixin],
    computed: {
        ...mapGetters(CATEGORY_MODULE, [MAIN_FILTER]),
        firstMainFilterLabel() {
            return this.MAIN_FILTER?.length > 0 ? this.MAIN_FILTER[0] : {};
        }
    }
}
</script>
<style>
.filter .feature.expand .property {
    display: flex !important;
}
</style>