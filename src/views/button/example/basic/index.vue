<template>
  <code-card v-bind="config">
    <bc-button>默认</bc-button>
    <bc-button type="primary">主要</bc-button>
    <bc-button type="warning">警告</bc-button>
    <bc-button type="danger">危险</bc-button>
    <bc-button type="text">文本</bc-button>
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'basicButton',
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
