import {filterBy} from "@/utils";
import SearchForm from '@/components/shared/search-form';

export default {
    components: {SearchForm},
    data() {
        return {
            q: '',
            searchTerms: []
        }
    },

    methods: {
        filterItems(items, searchTerms = []) {
            if (!items.length) return [];

            const type = items[0].type;
            const re = new RegExp('in:(' + searchTerms.map(i => i.name).join('|') +')', 'ig');
            const fields = [];
            const matches = this.q.match(re);

            if (matches) {
                this.q = this.q.replace(re, '').trim();
                if (!this.q) {
                    return items;
                }
                matches.forEach(match => {
                    let field = match.split(':')[1].toLowerCase()
                    let term = searchTerms.find(term => term.name === field);
                    if (term.propertyName) {
                        field = term.propertyName;
                    }
                    fields.push(`${type}.${field}`);
                });
            }

            return filterBy(
                items,
                this.q,
                ...(fields.length ? fields : [`${type}.name`]));
        }
    }
}