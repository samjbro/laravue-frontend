<template>
    <section>
        <div class="header">
            <h1>Category</h1>
        </div>
        <category-list :items="state.categories"/>
    </section>
</template>

<script>
    import CategoryList from './category-list';
    import {categoryStore} from "@/stores";

    export default {
        components: {CategoryList},

        data() {
            return {
                state: categoryStore.state
            }
        }
    }
</script>