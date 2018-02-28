import {http} from '@/services';
import {productStore} from '.';

export const sharedStore = {
    state: {
        products: []
    },

    init() {
        return new Promise((resolve, reject) => {
            http.get('data', ({data}) => {
                this.state = Object.assign(this.state, data);
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