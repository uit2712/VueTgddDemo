<template>
    <header>
        <top-header/>
        <list-categories/>
    </header>
</template>

<script>
import ListCategories from './ListCategories.vue';
import TopHeader from './TopHeader.vue';

export default {
    components: {
        ListCategories,
        TopHeader,
    }
}
</script>

<style>

</style>