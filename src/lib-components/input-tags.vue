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
    class="ui-form-section--input-tags"
  >
    <div class="ui-input-tags">
      <div
        v-for="(tag, index) in tags"
        :key="tag"
        :class="{ 'ui-input-tags__tag': true, 'ui-input-tags__tag--marked-for-delete': markedForDeleteIndex === index }"
      >
        <span>{{ tag }}</span>
        <button
          type="button"
          class="ui-input-tags__tag-delete"
          @click="removeTag(index)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z" fill="currentColor" /></svg>
        </button>
      </div>
      <input
        :placeholder="placeholder"
        type="text"
        class="ui-input-tags__input"
        @keydown.enter="addTag"
        @keydown.188="addTag"
        @keydown.delete="removeLastTag"
        @keydown.escape="clearMarkedForDelete"
        @input="onInput"
      />
    </div>
  </form-section>
</template>

<script>
import InputCommon from './input-common.js'
import { slugify } from '../utils/slugify.js'

export default {
  name: 'InputTags',

  mixins: [InputCommon],

  props: {
    value: {
      type: [Array, String],
      required: true
    },
    placeholder: {
      type: String,
      default: 'Enter a tag'
    },
    downcase: {
      type: Boolean,
      default: false
    },
    slugify: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      tags: [],
      markedForDeleteIndex: null
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (value) {
        this.tags = Array.isArray(value) ? value : value.split(',').filter(tag => tag)
      }
    }
  },

  methods: {
    onInput (event) {
      this.clearMarkedForDelete()
    },

    emitValue () {
        const value = Array.isArray(this.value) ? this.tags : this.tags.join(',')

        this.$emit('input', value)
    },

    addTag (event) {
      event.preventDefault()

      let tag = event.target.value.trim()

      if (tag.length > 0 && !this.tags.includes(tag)) {
        if (this.downcase) { tag = tag.toLowerCase() }
        if (this.slugify) { tag = slugify(tag) }

        this.tags.push(tag)
        event.target.value = ''

        this.emitValue()
      }
    },

    removeTag (index) {
      if (this.markedForDeleteIndex === index) {
        this.tags.splice(index, 1)
        this.emitValue()
        this.clearMarkedForDelete()
      } else {
        this.markedForDeleteIndex = index
      }
    },

    removeLastTag (event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.tags.length - 1)
      }
    },

    clearMarkedForDelete () {
      this.markedForDeleteIndex = null
    }
  }
}
</script>
