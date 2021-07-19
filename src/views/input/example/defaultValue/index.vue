<template>
  <code-card v-bind="config">
    <bc-input v-model="text" width="180px" default-value="bcInput" />
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'inputDefault',
  components: {
    codeCard,
  },
  data() {
    return {
      config,
      text: '',
    }
  }
}
</script>
