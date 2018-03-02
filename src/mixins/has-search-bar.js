import {filterBy} from "@/utils";
import SearchBar from '@/components/shared/search-bar';

export default {
    components: {SearchBar},
    data() {
        return {
            q: '',
            searchTerms: []
        }
    },

    computed: {
        regex() {
            return new RegExp('in:(' + this.searchTerms.map(i => i.name).join('|') + ')', 'ig');
        },
    },

    methods: {
        filterItems(items) {
            if (!items.length) return [];

            const type = items[0].type;
            const fields = this.getFields(type);

            return filterBy(
                items,
                this.q,
                ...(fields.length ? fields : [`${type}.name`]));
        },

        getFields(type) {
            const fields = [];
            const matches = this.q.match(this.regex);

            if (matches && this.searchTerms.length) {
                this.q = this.q.replace(this.regex, '').trim();
                if (!this.q) return [];
                matches.forEach(match => {
                    fields.push(`${type}.${this.getField(match)}`);
                });
            }
            return fields;
        },

        getField(match) {
            let field = match.split(':')[1].toLowerCase()
            let term = this.searchTerms.find(term => term.name === field);
            if (term.propertyName) field = term.propertyName;

            return field;
        }
    }
}