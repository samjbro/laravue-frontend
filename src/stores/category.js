import {each} from 'lodash';
import stub from '@/stubs/category';
import Vue from 'vue';

export const categoryStore = {
    stub,
    cache: [],
    state: {
        categories: [stub]
    },

    init(categories) {
        this.all = categories;
        each(this.all, category => this.setupCategory(category));
    },

    setupCategory(category) {
        Vue.set(category, 'songs', []);

        this.cache[category.id] = category;
        return category;
    },

    set all(value) {
        this.state.categories = value;
    },

    get all() {
        return this.state.categories;
    },

    byId(id) {
        return this.cache[id];
    }
};