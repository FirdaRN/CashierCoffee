<style scoped>
    label {
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9b9b9b;
    }
    .help-block {
        color: #f66;
        font-size: 12px;
        margin-bottom: 0;
    }
    .multiselect {
        --ms-max-height: max-content;
    }    
</style>

<template>
    <div class="form-group">
        <label>{{ caption }}</label>
            <multiselect
                class="multiselect"
                :selected="selected"
                @input="$emit('update:value', $event.target.selected)"
                :mode="mode"
                :valueProp="id"
                :trackBy="label"
                :object="true"
                :options="options"
                :placeholder="placeholder"
                :allow-empty="allowEmpty"
                :loading="loading"
                :id="customId"
                :key="key"
                :label="label"
                :disabled="disabled"
                @change="updateSelected"
                @select="selectOption"
                :searchable="searchable"
                :canClear="false"
                noOptionsText=""
                noResultsText=""
                :caret="caret"
                :canDeselect="allowEmpty">
                <template v-slot:noresults>
                    <slot name="noresults" slot="noresults"></slot>
                </template>
                <template v-slot:afterlist>
                    <slot name="afterlist" slot="afterlist"></slot>
                </template>
                <template v-slot:beforelist>
                    <slot name="beforelist" slot="beforelist"></slot>
                </template>
            </multiselect>
        <p class="help-block" slot="validation">
            <slot name="validation"></slot>
        </p>
    </div>
</template>

<script>
    import Multiselect from '@vueform/multiselect'

    export default {
        name: 'select-input',
        props: {
            options: {
                type: Array,
                required: false
            },
            selected: {
                type: null,
                required: false
            },
            multiple: {
                type: Boolean,
                required: false
            },
            caption: {
                type: String,
                required: false
            },
            placeholder: {
                type: String,
                required: false
            },
            allowEmpty: {
                type: Boolean,
                required: false
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false
            },
            id: {
                type: [String, Number],
                required: false,
                default: ''
            },
            key: {
                type: String,
                required: false,
                default: 'name'
            },
            mode: {
                type: String,
                required: false,
                default: 'single'
            },            
            label: {
                type: String,
                required: false,
                default: 'name'
            },
            loading: {
                type: Boolean,
                required: false
            },
            searchable: {
                type: Boolean,
                required: false,
                default: true
            },
            caret: {
                type: Boolean,
                required: false,
                default: true
            },
            customId: {
                type: String,
                required: false,
                default: ''
            },
            selectOption:Function
        },
        data () {
            return {}
        },
        methods: {
            updateSelected (selected, id) {
                this.$emit('selectInputSelected', selected);
            }
        },
        components: {
            Multiselect
        },
    }
</script>