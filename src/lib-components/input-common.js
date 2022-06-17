import FormSection from './form-section.vue'

export default {
  components: {
    FormSection
  },

  props: {
    required: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
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
    },
    fieldStyle: {
      type: String,
      required: false,
      default: () => null,
      validator: value => ['error', 'success', 'warning'].includes(value)
    }
  },

  computed: {
    isInvalid () {
      return !!this.errorMsg
    }
  }
}
