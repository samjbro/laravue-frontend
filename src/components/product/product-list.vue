<template>
    <div class="main-scroll-wrap product-list-wrap">
        <table>
            <thead>
            <tr>
                <th class="name">Product Name</th>
                <th class="category">Category</th>
                <th class="part-number">Part Number</th>
                <th class="price">Price</th>
            </tr>
            </thead>
        </table>
        <virtual-scroller
                class="scroller"
                content-tag="table"
                :items="productRows"
                item-height="35"
                :renderers="renderers"
        />
    </div>
</template>

<script>
    import ProductItem from './product-item';

    export default {
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                renderers: Object.freeze({
                    product: ProductItem
                }),
                productRows: []
            }
        },
        watch: {
            items() {
                this.render();
            }
        },
        methods: {
            render() {
                this.productRows = this.items.map(product => {
                    return {
                        type: 'product',
                        product
                    }
                })
            }
        },
        mounted() {
            this.render();
        }
    }
</script>

<style lang="scss">
    @import "~#/_variables";

    .product-list-wrap {
        position: relative;
        padding: 8px 24px;

        table {
            width: 100%;
            table-layout: fixed;
        }

        th {
            font-weight: bold;
        }

        td, th {
            padding: 8px;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            &.name {
                width: 35%;
            }

            &.category {
                width: 15%;
            }

            &.part-number {
                width: 20%;
            }

            &.price {
                width: 15%;
            }
        }

        thead {
            border-bottom: $borderBottom;
        }

        .scroller {
            overflow: auto;
            position: absolute;
            top: 50px;
            left: 0;
            bottom: 0;
            right: 0;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;

            .item-container {
                position: absolute;
                left: 24px;
                right: 24px;
            }

            .item {
                margin-bottom: 0;
            }
        }
    }
</style>