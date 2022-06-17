<script>
import Vue from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
import { InputText } from '@/entry.esm'

export default Vue.extend({
  name: 'ServeDev',

  components: {
   InputText,
  },

  data() {
    return {
      inputValue: ''
    }
  },
});
</script>

<template>
  <div id="app">
    <h2>input-text</h2>
    <input-text
      id="name"
      v-model="inputValue"
      label="Name"
      hint="example hint"
      required
    />
  </div>
</template>
