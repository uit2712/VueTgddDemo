<template>
    <i
        class="fas fa-info-circle"
        data-toggle="popover"
        :title="title"
        data-placement="bottom"
        :data-content="`<a href='${apiUrl}' target='_blank'>Link api</a><pre class='json-code'>${$toBeautifulJSON(info)}</pre>`"
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
        info: {
            type: Object,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    },
};
</script>