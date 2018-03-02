import {each, get} from 'lodash';

export function filterBy(arr, search, ...keys) {
    if (!search) {
        return arr;
    }

    search = (`${search}`).toLowerCase();

    const res = [];

    each(arr, item => {
        each(keys, key => {
            if (`${get(item, key)}`.toLowerCase().indexOf(search) !== -1) {
                res.push(item);
            }
        });
    });
    return res;
}