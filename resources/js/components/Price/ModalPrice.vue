<template>
    <div id="modal-price" class="modal fade" tabindex="-1" role="dialog" style="display: block;">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
                    <h4 class="modal-title">Harga</h4>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <input-text type="text" class="col-md-12" caption="Nama" placeholder="Masukkan Nama" v-model:value="form.name" :maxlength="25">
                            <template v-slot:validation>
                                <p class="help-block">{{ validation.firstError('form.name') }}</p>
                            </template>
                        </input-text>
                    </div>
                    <div class="row">
                        <select-input
                            class="col-md-12 form-input"
                            :caption="multiselect.category.caption"
                            :placeholder="multiselect.category.placeholder"
                            :options="multiselect.category.options"
                            :selected="multiselect.category.selected"
                            :loading="multiselect.category.loading"
                            :disabled="multiselect.category.disabled"
                            :id="multiselect.category.key"
                            :key="multiselect.category.key"
                            :label="multiselect.category.label"
                            @selectInputSelected="setCategory"
                        >
                            <template v-slot:noresults>
                                <span class="multiselect__option">
                                    Data tidak ditemukan
                                </span>
                            </template>

                            <template v-slot:validation>
                                <p class="help-block">{{ validation.firstError('form.category_id') }}</p>
                            </template>
                        </select-input>
                    </div>
                    <div class="row">
                        <input-text type="text" class="col-md-12" caption="Harga" placeholder="Masukkan Harga" v-model:value="form.price" :maxlength="25">
                            <template v-slot:validation>
                                <p class="help-block">{{ validation.firstError('form.price') }}</p>
                            </template>
                        </input-text>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import { Modal } from 'bootstrap';
    import SimpleVueValidation from 'simple-vue-validator';
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'modal-price',
        mixins: [SimpleVueValidation.mixin],
        props: {
            modal: {
                type: Object,
                required: true,
                twoWay: true
            },
            modalComponents: {
                type: Array,
                required: true,
                twoWay: true
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    category_id: '',
                    price: '',
                },
                multiselect: {
                    category: {
                        caption: "Kategori",
                        placeholder: "Pilih Kategori",
                        options: [],
                        loading: true,
                        disabled: true,
                        selected: null,
                        key: 'id',
                        label: 'name'
                    },
                },
                showModal: null
            }
        },
        mounted() {
            this.init();

            if (this.modal.type === 'edit') {
                this.form.name = this.modal.data.name;
            }

        },
        methods: {
            init() {
                const modalElement = document.getElementById('modal-price');
                this.showModal = new Modal(modalElement);
                this.showModal.show();
            },
            submit() {
                this.$validate()
                    .then(success => {
                        if (success) {
                            this.$root.is_loading = true;

                            let urlAction = '/api/v1/price/add';
                            if (this.modal.type === 'edit') {
                                urlAction = `/api/v1/price/update/${this.modal.data.id}`;
                            }

                            axios.post(urlAction, this.form).then((response) => {
                                this.$root.is_loading = false;
                                if (response.data.error) {
                                    _.each(response.data.messages, (error) => {
                                        this.$root.flash_messages.push({
                                            'info': 'warning',
                                            'message': error
                                        });
                                    });                    
                                }

                                if (response.data.success) {
                                    this.$root.flash_messages.push({
                                        'info'      :   'info',
                                        'message'   :  response.data.messages
                                    });

                                    this.showModal.hide();
                                    this.emitter.emit('master-price:vuetable:refresh');
                                }
                            }, (response) => {
                                this.$root.is_loading = false;
                                if (response.status === 403) {
                                    this.$root.flash_messages.push({
                                        'info'      :   'warning',
                                        'message'   :   response.data
                                    });
                                } else {
                                    this.$root.flash_messages.push({
                                        'info'      :   'warning',
                                        'message'   :   'price Failed to Added'
                                    });
                                }
                            });

                        } else {
                            if (this.validation.errors.length > 0) {
                                let firstField = _.head(this.validation.errors).field.replace('form.', '');
                                this.$refs[firstField].scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        }
                    });
            },
            closeModal() {
                this.modalComponents.splice(_.findIndex(this.modalComponents, (o) => o.component === this.$options.name), 1);
                this.showModal.hide();
            },
            setCategory(selected) {
                this.multiselect.category.selected = selected;

                this.form.category_id = selected.category_id.toString();
            }
        },
        components: {
            'input-text': require('../Global/Partials/InputText.vue').default,
            'select-input': require('../Global/Partials/SelectInput.vue').default,
        },
        validators: {
            'form.name': function (value) {
                let msg = 'Nama harus diisi';
                return Validator.value(value).required(msg);
            },
            'form.category_id': function (value) {
                let msg = 'Kategori harus diisi';
                return Validator.value(value).required(msg);
            },
            'form.price': function (value) {
                let msg = 'Harga harus diisi';
                return Validator.value(value).required(msg);
            },
        }
    }
</script>