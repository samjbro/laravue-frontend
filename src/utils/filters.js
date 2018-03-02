import {each, get} from 'lodash';

export function filterBy (arr, search) {
    if (!search) {
        return arr;
    }

    search = (`${search}`).toLowerCase();

    const res = [];

    each(arr, item => {
        console.log(item);
        if (`${get(item, 'product.name')}`.toLowerCase().indexOf(search) !== -1) {
            res.push(item);
        }
    });
    return res;
}