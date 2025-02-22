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
    .form-group input {
        border-radius: 5px;
    }
    .help-block {
        color: #f66;
        font-size: 12px;
        margin-bottom: 0;
    }
</style>

<template>
    <div class="form-group">
        <label :for="id">{{ caption }}</label>
        <input 
            :id="id" 
            :type="type" 
            class="form-control" 
            :value="value" 
            :placeholder="placeholder" 
            :disabled="disabled" 
            :maxlength="maxlength" 
            :min="minvalue" 
            @input="$emit('update:value', $event.target.value)">
        <p class="help-block" slot="validation">
            <slot name="validation"></slot>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'input-text',
        props: {
            id: {
                type: String,
                required: false,
                default: 'input-text'
            },
            type: {
                type: String,
                required: false,
                default: 'text'
            },
            caption: {
                type: String,
                required: true
            },
            value: {
                type: null,
                required: true,
                twoWay: true
            },
            placeholder: {
                type: String,
                required: false
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false
            },
            maxlength: {
                required: false
            },      
            minvalue: {
                required: false
            }                        
        }
    }
</script>
