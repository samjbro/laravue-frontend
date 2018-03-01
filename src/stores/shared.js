import {http} from '@/services';
import {categoryStore, productStore} from '.';

export const sharedStore = {
    state: {
        products: [],
        categories: []
    },

    init() {
        return new Promise((resolve, reject) => {
            http.get('data', ({data}) => {
                this.state = Object.assign(this.state, data);
                categoryStore.init(this.state.categories);
                productStore.init(this.state.products);
                resolve(data);
            }, error => {
                console.log('stores/shared.js init failed');
                console.log(error);
                reject(error);
            });
        })
    }
};