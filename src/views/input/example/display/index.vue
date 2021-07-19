<template>
  <code-card v-bind="config">
    <bc-input v-model="text" width="180px" only-display />
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'inputDisplay',
  components: {
    codeCard,
  },
  data() {
    return {
      config,
      text: 'bcInput',
    }
  }
}
</script>
