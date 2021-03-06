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
    <div class="relative">
      <input
        :id="id"
        ref="input"
        :value="value"
        :type="inputType"
        :disabled="disabled"
        :aria-required="required"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="isInvalid"
        :placeholder="placeholder"
        :class="inputClass"
        @input="$emit('input', $event.target.value)"
      >

      <div v-if="hasAppendIconSlot" class="ui-input-text__append-icon ui-input-text__icon">
        <slot name="appendIcon" />
      </div>

      <div v-if="passwordPreview" class="ui-input-text__toggle-preview ui-input-text__icon">
        <button @click="visible=!visible" type="button">
          <svg v-if="visible" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M.5 8s3-5.5 7.5-5.5S15.5 8 15.5 8s-3 5.5-7.5 5.5S.5 8 .5 8z" /><circle cx="8" cy="8" r="2.5" /></g></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M.5 8s3-5.5 7.5-5.5S15.5 8 15.5 8s-3 5.5-7.5 5.5S.5 8 .5 8zM5 8a3 3 0 013-3M11 8a3 3 0 01-3 3M1 15L15 1" /></g></svg>
        </button>
      </div>
    </div>

    <slot name="addon" />
  </form-section>
</template>

<script>
import InputCommon from './input-common.js'

export default {
  name: 'InputText',

  mixins: [InputCommon],

  props: {
    value: {
      type: [String, Number],
      default: () => ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    passwordPreview: {
      type: Boolean,
      default: () => false
    },
    focus: {
      type: Boolean,
      default: () => false
    }
  },

  data () {
    return {
      visible: false
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

    hasAppendIconSlot () {
      return !!this.$slots.appendIcon
    },

    inputType () {
      return this.passwordPreview ? this.passwordType : this.type
    },

    passwordType () {
      return this.visible ? 'text' : 'password'
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
