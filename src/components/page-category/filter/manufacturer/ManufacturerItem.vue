<template>
    <a
        v-if="item"
        href="javascript:void(0)"
        :data-id="item.id"
        :data-name="item.name"
        @click="check"
        :class="{ check: isCheck === true }"
    >
        <img v-lazy="item.imageUrl"/>
    </a>
</template>

<script>
import { checkMixin } from '@/mixins';

export default {
    mixins: [checkMixin],
    props: {
        item: {
            type: Object,
            required: true,
        },
        initIsChecked: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    watch: {
        isCheck(value) {
            if (value === true) {
                this.$emit('select', this.item);
            } else {
                this.$emit('unselect', this.item);
            }
        },
        initIsChecked(value) {
            if (value === false) {
                this.isCheck = false;
            }
        }
    }
}
</script>