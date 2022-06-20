# input-text

`<input-textarea />` Component. Here's how to use it...

<template>
  <input-textarea
      id="name"
      v-model="inputValue"
      label="Name"
      required
    />
</template>

<script>
import InputTextarea from '../../src/lib-components/input-textarea.vue'

export default {
  components: {
    InputTextarea
  },
  
  data() {
    return {
      inputValue: ''
    }
  },
}
</script>
