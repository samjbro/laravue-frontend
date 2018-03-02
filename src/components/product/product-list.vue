<template>
    <div class="main-scroll-wrap product-list-wrap">
        <div class="search-bar">
            <search-form :terms="searchTerms"/>
        </div>
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
                :items="filteredProducts"
                item-height="35"
                :renderers="renderers"
        />
    </div>
</template>

<script>
    import {event, filterBy} from '@/utils';
    import HasSearchBar from '@/mixins/has-search-bar';
    import ProductItem from './product-item';

    export default {
        mixins: [HasSearchBar],
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
                productRows: [],
                searchTerms: [
                    {name: 'name'},
                    {name: 'category', propertyName: 'category.name'},
                    {name: 'part_no', propertyName: 'manufacturer_part_no'},
                    {name: 'price'}
                ]
            }
        },
        watch: {
            items() {
                this.render();
            }
        },
        computed: {
            filteredProducts() {
                return this.filterItems(this.productRows, this.searchTerms);
            },

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
        },

        created() {
            event.on({
                'filter:changed': q => {
                    this.q = q;
                }
            })
        }
    }
</script>

<style lang="scss">
    @import "~#/_variables";
    @import "~#/_mixins";

    .product-list-wrap {
        @include table-scroller();

        td, th {
            &.name {
                width: 30%;
            }

            &.category {
                width: 20%;
            }

            &.part-number {
                width: 20%;
            }

            &.price {
                width: 15%;
            }
        }

        .scroller {
            top: 84px;
        }
    }

</style>