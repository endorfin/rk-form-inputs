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
    class="ui-form-section--input-textarea"
  >
    <div class="relative">
      <textarea
        :id="id"
        ref="input"
        :value="value"
        :disabled="disabled"
        :aria-required="required"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="isInvalid"
        :placeholder="placeholder"
        :readonly="readonly"
        :rows="rows"
        :cols="cols"
        :class="inputClass"
        @input="$emit('input', $event.target.value)"
      />
    </div>

    <slot name="addon" />
  </form-section>
</template>

<script>
import InputCommon from './input-common.js'

export default {
  name: 'InputTextarea',

  mixins: [InputCommon],

  props: {
    value: {
      type: [String, Number],
      default: () => ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 5
    },
    cols: {
      type: Number,
      default: 80
    },
    readonly: {
      type: Boolean,
      default: () => false
    },
    focus: {
      type: Boolean,
      default: () => false
    }
  },

  computed: {
    inputClass () {
      return {
        'ui-input-textarea': true,
        'ui-input-textarea--disabled': this.disabled,
        'ui-input-textarea--success': this.fieldStyle === 'success',
        'ui-input-textarea--warning': this.fieldStyle === 'warning',
        'ui-input-textarea--error': this.isInvalid || this.fieldStyle === 'error'
      }
    },

    ariaDescribedby () {
      return this.hint ? this.id + '-hint' : null
    }
  },

  created () {
    if (this.focus) {
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    }
  }
}
</script>
