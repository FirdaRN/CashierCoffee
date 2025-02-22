<script>
    export default {
        components: {
            'modal-component': require('./ModalComponent.vue').default,
        },
        mounted () {
            this.emitter.off('modal.show')
            this.emitter.on('modal.show', (modalComponent) => {
                this.modalComponents.push(modalComponent);
            });
        },
        data() {
            return {
                modalComponents: [],
                modalComponent: '',
                modalData: {}
            };
        },
        methods: {}
    }
</script>
