import Vue from 'vue';
import {unionBy} from 'lodash';
import stub from '@/stubs/product';
import {categoryStore} from "./category";

export const productStore = {
    stub,
    cache: {},
    state: {
        products: [stub]
    },

    init(products) {
        this.all = products;
        this.all.forEach(product => this.setupProduct(product));
    },

    setupProduct(product) {
        const category = categoryStore.byId(product.category_id);
        Vue.set(product, 'category', category);

        category.products = unionBy(category.products, [product], 'id');

        this.cache[product.id] = product;
        return product;
    },

    set all(value) {
        this.state.products = value;
    },

    get all() {
        return this.state.products;
    }
};