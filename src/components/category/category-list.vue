<template>
    <div class="main-scroll-wrap category-list-wrap">
        <div class="search-bar">
            <search-bar :terms="searchTerms"/>
        </div>
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
                :items="filteredCategories"
                item-height="35"
                :renderers="renderers"
        />
    </div>
</template>

<script>
    import {event, filterBy} from '@/utils';
    import HasSearchBar from '@/mixins/has-search-bar';
    import CategoryItem from './category-item';

    export default {
        components: {CategoryItem},
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
                    category: CategoryItem
                }),
                categoryRows: [],
            }
        },
        watch: {
            items() {
                this.render();
            }
        },
        computed: {
            filteredCategories() {
                return this.filterItems(this.categoryRows);
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
        },

        created() {
            event.on({
                'filter:changed': q => {
                    this.q = q;
                }
            });
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
        .scroller {
            top: 84px;
        }
    }
</style>