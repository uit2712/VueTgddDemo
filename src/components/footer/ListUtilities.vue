<template>
    <fragment>
        <ul v-for="(col, index) in LIST_UTILITIES" :key="index" class="colfoot">
            <li v-for="(item, utiIndex) in col" :key="utiIndex">
                <a :href="item.link" :target="item.isOpenInNewTab === true ? '_blank' : ''" :title="item.title">{{ item.text }}</a>
            </li>
        </ul>
    </fragment>
</template>

<script>
import { mapGetters } from 'vuex';
import { FOOTER_MODULE, LIST_UTILITIES } from '@/store/module-types/footer';

export default {
    computed: {
        ...mapGetters(FOOTER_MODULE, [LIST_UTILITIES]),
    }
}
</script>