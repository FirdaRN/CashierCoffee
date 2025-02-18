<template>
    <th v-if="isHeader"></th>
    <td v-else>
        <div>
            <i class="ri-pencil-fill" style="border:none;background:none;font-size:1em;cursor:pointer;" @click="itemAction('edit-item', rowData)">Edit</i>
            <span style="margin-right: 20px;"></span>
            <i class="ri-delete-bin-5-fill" style="border:none;background:none;font-size:1em;cursor:pointer;" @click="itemAction('delete-item', rowData)">Delete</i>
        </div>
    </td>
</template>

<script>
    import VuetableFieldMixin from 'vue3-vuetable/src/components/VuetableFieldMixin.vue'
    export default {
        mixins:[VuetableFieldMixin],
        name: 'price-custom-action',
        props: {
            rowData: {
                type: Object,
                required: true
            }
        },
        methods: {
            itemAction: function(action, data) {
                console.log(action)
                console.log(data)
                // let path = {
                //     name: 'category-detail',
                //     params: {
                //         id: data.id
                //     }
                // };
                // this.$router.push(path);                
            }
        }
    }
</script>