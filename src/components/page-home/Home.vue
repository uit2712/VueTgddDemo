<template>
    <header>
        <list-categories/>
    </header>
</template>

<script>
import ListCategories from './ListCategories.vue';

export default {
    components: {
        ListCategories,
    }
}
</script>

<style>
@import '../../../public/css/home.css';
</style>