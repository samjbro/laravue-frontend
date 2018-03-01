<template>
    <section>
        <div class="header">
            <h1>Product</h1>
        </div>
        <product-list :items="state.products"/>
    </section>
</template>

<script>
    import {productStore} from '@/stores';
    import ProductList from './product-list.vue';

    export default {
        components: {ProductList},

        data() {
            return {
                state: productStore.state
            }
        }
    }
</script>