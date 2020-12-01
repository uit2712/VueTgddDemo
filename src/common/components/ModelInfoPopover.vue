<template>
    <i
        class="fas fa-info-circle"
        data-toggle="popover"
        :title="title"
        data-placement="bottom"
        :data-content="`Link api: <a href='${apiUrl}' target='_blank'>${apiUrl}</a><br/>${requestDataHtml}<br/>${responseDataHtml}`"
    ></i>
</template>

<script>
export default {
    props: {
        apiUrl: {
            type: String,
            required: false,
            default: '',
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
        }
    },
    computed: {
        requestDataHtml() {
            if (!this.requestData)
                return '<b>Input model:</b> Không có';

            return `<b>Input model:</b> <pre class='json-code'>${this.$toBeautifulJSON(this.requestData)}</pre>`;
        },
        responseDataHtml() {
            if (!this.responseData)
                return '';

            return `<b>Output model:</b> <pre class='json-code'>${this.$toBeautifulJSON(this.responseData)}</pre>`;
        }
    },
};
</script>