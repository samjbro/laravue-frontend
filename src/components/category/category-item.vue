<template>
    <tr>
        <td class="name">{{category.name || ''}}</td>
        <td class="product-amount">{{productAmount}}</td>
    </tr>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },

        computed: {
            category() {
              return this.item.category;
            },
            productAmount() {
                return this.category.products.length;
            }
        }
    }
</script>