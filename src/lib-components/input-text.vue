<template>
  <form-section
    :id="id"
    :label="label"
    :label-hidden="labelHidden"
    :required="required"
    :disabled="disabled"
    :hint="hint"
    :corner-hint="cornerHint"
    :error-msg="errorMsg"
    class="ui-form-section--input-text"
  >
    <input
      :id="id"
      ref="input"
      :value="value"
      :type="type"
      :disabled="disabled"
      :aria-required="required"
      :aria-describedby="ariaDescribedby"
      :aria-invalid="isInvalid"
      :placeholder="placeholder"
      :class="inputClass"
      @input="$emit('input', $event.target.value)"
    >
  </form-section>
</template>

<script>
import InputCommon from './input-common.js'

export default {
  name: 'InputText',

  mixins: [InputCommon],

  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },

  computed: {
    inputClass () {
      return {
        'ui-input-text': true,
        'ui-input-text--disabled': this.disabled,
        'ui-input-text--success': this.fieldStyle === 'success',
        'ui-input-text--warning': this.fieldStyle === 'warning',
        'ui-input-text--error': this.isInvalid || this.fieldStyle === 'error'
      }
    },

    ariaDescribedby () {
      return this.hint ? this.id + '-hint' : null
    }
  }
}
</script>
