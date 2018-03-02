<template>
    <div class="search-form">
        <input type="text"
               :placeholder="placeholder"
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
        props: {
          terms: {
              type: Array,
              required: false
          }
        },

        data() {
            return {
                q: ''
            }
        },

        computed: {
          placeholder() {
              let terms = this.terms.map(term => 'in:' + term.name).join(', ');

              return this.terms.length
                  ? 'Filter results using ' + terms
                  : 'Search';
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