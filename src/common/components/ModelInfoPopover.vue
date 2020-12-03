<template>
    <fragment>
        <b-icon-info-circle-fill :id="id" :style="iconCustomStyle" class="fas fa-info-circle"/>
        <b-popover
            :target="`${id}`"
            :title="title"
            placement="bottom"
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
        }
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
            return `Link api: <a href='${this.apiUrl}' target='_blank'>${this.apiUrl}</a><br/>${this.requestDataHtml}<br/>${this.responseDataHtml}`
        }
    },
};
</script>