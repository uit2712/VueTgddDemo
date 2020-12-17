<template>
    <fragment>
        <b-icon-info-circle-fill
            :id="id"
            :style="iconCustomStyle"
            class="fas fa-info-circle"
            :variant="variant"
        />
        <b-popover
            :target="`${id}`"
            :title="title"
            :placement="placement"
        >
            <div v-html="dataContent"></div>
        </b-popover>
    </fragment>
</template>

<script>
import { BIconInfoCircleFill } from 'bootstrap-vue';

export default {
    components: {
        BIconInfoCircleFill
    },
    props: {
        apiUrl: {
            type: String,
            required: false,
            default: "",
        },
        requestData: {
            type: Object,
            required: false,
        },
        responseData: {
            type: Object,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        iconCustomStyle: {
            type: String,
            required: false,
            default: '',
        },
        /**
         * success
         * warning
         * danger
         * info
         * primary
         * secondary
         * dark
         */
        variant: {
            type: String,
            required: false,
            default: 'info',
        },
        placement: {
            type: String,
            required: false,
            default: 'bottom',
        },
        modelUrl: {
            type: String,
            required: false,
            default: "",
        },
    },
    computed: {
        requestDataHtml() {
            if (!this.requestData) return "<b>Input model:</b> Không có";

            return `<b>Input model:</b> <pre class='json-code'>${this.$toBeautifulJSON(
                this.requestData
            )}</pre>`;
        },
        responseDataHtml() {
            if (!this.responseData) return "";

            return `<b>Output model:</b> <pre class='json-code'>${this.$toBeautifulJSON(
                this.responseData
            )}</pre>`;
        },
        dataContent() {
            return `
                <span><span>Link api:</span> <a class="short-link" href='${this.apiUrl}' target='_blank'>${this.apiUrl}</a></span><br/>
                <span><span>Link model:</span> <a class="short-link" href='${this.modelUrl}' target='_blank'>${this.modelUrl}</a></span><br/>
                ${this.requestDataHtml}<br/>
                ${this.responseDataHtml}
            `
        }
    },
};
</script>
<style>
.short-link {
    display: block;
    width: 250px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>