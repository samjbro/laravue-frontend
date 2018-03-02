<template>
    <div class="search-form">
        <input type="text"
               placeholder="Search"
               @input="filter"
               v-model="q"
               v-global-focus
        >
    </div>
</template>

<script>
    import {debounce} from 'lodash';
    import {event} from '@/utils';

    export default {
        data() {
            return {
                q: ''
            }
        },

        methods: {
            filter: debounce(function() {
                event.emit('filter:changed', this.q);
            }, 200)
        }
    }
</script>

<style lang="scss">
    @import "~#/_mixins.scss";

    .search-form {
        display: flex;

        input[type="text"] {
            flex: 1;
            height: 20px;
            font-size: 14px;
            border: 1px solid #bfbfbf;
            border-radius: 5px;
            padding-left: 15px;
        }
    }

</style>