<template>
    <div class="main-scroll-wrap category-list-wrap">
        <table>
            <thead>
            <tr>
                <th class="name">Category Name</th>
                <th class="product-amount">No. of Products</th>
            </tr>
            </thead>
        </table>
        <virtual-scroller
                class="scroller"
                content-tag="table"
                :items="categoryRows"
                item-height="35"
                :renderers="renderers"
        />
    </div>
</template>

<script>
    import CategoryItem from './category-item';

    export default {
        components: {CategoryItem},
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                renderers: Object.freeze({
                    category: CategoryItem
                }),
                categoryRows: []
            }
        },
        watch: {
            items() {
                this.render();
            }
        },
        mounted() {
            this.render();
        },
        methods: {
            render() {
                this.categoryRows = this.items.map(category => {
                    return {
                        type: 'category',
                        category
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/_variables";
    @import "~#/_mixins";

    .category-list-wrap {
        @include table-scroller();

        td, th {
            &.name {
                width: 50%;
            }

            &.product-amount {
                width: 50%;
            }
        }
    }
</style>