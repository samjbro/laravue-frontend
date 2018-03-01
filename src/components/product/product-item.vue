<template>
    <tr>
        <td class="name">{{product.name || ''}}</td>
        <td class="category">unknown</td>
        <td class="part-number">{{product.manufacturer_part_no || ''}}</td>
        <td class="price">£{{ price }}</td>
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
            product() {
                return this.item.product;
            } ,
            price() {
                return (this.product.price / 100).toFixed(2);
            }
        }
    }
</script>