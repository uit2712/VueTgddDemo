<template>
    <div id="app">
        <home/>
    </div>
</template>

<script>
import Home from '@/components/page-home/Home.vue';

export default {
    name: "App",
    components: {
        Home,
    },
};
</script>
<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
</style>
