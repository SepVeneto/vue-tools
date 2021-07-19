<template>
  <code-card v-bind="config">
    <div style="display: flex; justify-content: space-between">
      <bc-input v-model="text" width="180px" border="none" />
      <bc-input v-model="text" width="180px" border="bottom" />
      <bc-input v-model="text" width="180px" border="all" />
    </div>
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'inputBorder',
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
