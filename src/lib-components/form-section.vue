<template>
  <div :class="sectionClass">
    <div class="ui-form-section__label-wrapper">
      <label
        :for="id"
        :class="labelClass"
      >
        {{ label }}
      </label>

      <sup
        v-if="!required"
        class="ui-form-section__optional-hint"
        aria-hidden="true"
      >
        optional
      </sup>

      <span
        v-if="cornerHintPresent"
        class="ui-form-section__corner-hint"
      >
        <slot name="cornerHint">
          {{ cornerHint }}
        </slot>
      </span>
    </div>

    <slot />

    <div
      v-if="hint && !errorMsg"
      :id="`${id}-hint`"
      class="ui-form-section__hint"
    >
      {{ hint }}
    </div>

    <div
      v-if="errorMsg"
      class="form-section__error-msg"
    >
      {{ errorMsg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSection',

  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    labelHidden: {
      type: Boolean,
      default: () => false
    },
    required: {
      type: Boolean,
      required: false,
      default: () => false
    },
    hint: {
      type: String,
      required: false,
      default: () => null
    },
    cornerHint: {
      type: String,
      required: false,
      default: () => null
    },
    errorMsg: {
      type: String,
      required: false,
      default: () => null
    }
  },

  computed: {
    sectionClass () {
      return {
        'ui-form-section': true,
        'ui-form-section--error': this.errorMsg
      }
    },

    labelClass () {
      return {
        'ui-form-section__label': true,
        'ui-form-section__label--hidden': this.labelHidden
      }
    },

    hasCornerHintSlot () {
      return !!this.$slots.cornerHint
    },

    cornerHintPresent () {
      return this.hasCornerHintSlot || this.cornerHint
    }
  }
}
</script>
