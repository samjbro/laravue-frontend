<template>
    <div class="main-scroll-wrap product-list-wrap">
        <div class="search-bar">
            <search-form/>
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
                :items="filteredItems"
                item-height="35"
                :renderers="renderers"
        />
    </div>
</template>

<script>
    import {event, filterBy} from '@/utils';
    import ProductItem from './product-item';
    import SearchForm from '@/components/shared/search-form';

    export default {
        components: {SearchForm},
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
                q: '',
                productRows: []
            }
        },
        watch: {
            items() {
                this.render();
            }
        },
        computed: {
          filteredItems() {
              return filterBy(this.productRows, this.q);
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

    .search-bar {
        height: 35px;
        padding-bottom: 10px;
    }

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
            top: 95px;
        }
    }

</style>