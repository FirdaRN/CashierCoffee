<template>
    <div v-for="modal in modalComponents">
        <component :is="modal.component" :modal.sync="modal" :modal-components.sync="modalComponents"></component>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        name: 'modal-component',
        props: {
            modalComponents: {
                type: Array,
                required: true,
                twoWay: true
            }
        },
        components: {
            'modal-category': require('../../Category/ModalCategory.vue').default,
            'modal-price': require('../../Price/ModalPrice.vue').default,
        }
    }
</script>
