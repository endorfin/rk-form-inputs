# input-text

`<input-text />` Component. Here's how to use it...

<template>
  <input-text
      id="name"
      v-model="inputValue"
      label="Name"
      required
    />
</template>

<script>
import InputText from '../../src/lib-components/input-text.vue'

export default {
  components: {
    InputText
  },
  
  data() {
    return {
      inputValue: ''
    }
  },
}
</script>
