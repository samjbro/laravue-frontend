<template>
    <div id="mainWrapper">
        <sidebar/>
        <main-content/>
    </div>
</template>

<script>
    import Sidebar from '@/components/sidebar.vue';
    import MainContent from '@/components/main-content.vue';

    export default {
        components: {Sidebar, MainContent}
    }
</script>

<style lang="scss">
    #mainWrapper {
        display: flex;
        flex: 1;
    }
</style>