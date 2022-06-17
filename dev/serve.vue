<script>
import Vue from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
import { InputTags, InputText } from '@/entry.esm'
import '../dist/styles.css'

export default Vue.extend({
  name: 'ServeDev',

  components: {
    InputTags,
    InputText
  },

  data() {
    return {
      inputValue: '',
      tags: [],
    }
  },
});
</script>

<template>
  <div id="app" class="container mx-auto">
    <h2 class="text-2xl mt-8 mb-4">#input-text</h2>
    <p>
      value: {{ inputValue }}
    </p>
    <input-text
      id="name"
      v-model="inputValue"
      label="Name"
      hint="example hint"
      required
    />

    <h2 class="text-2xl mt-8 mb-4">#input-tags</h2>
    <p>
      value: {{ tags }}
    </p>
    <input-tags
      id="tags"
      v-model="tags"
      label="Tags"
      required
    />
  </div>
</template>
