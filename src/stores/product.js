import stub from '@/stubs/product';

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