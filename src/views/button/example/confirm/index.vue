<template>
  <code-card v-bind="config">
    <bc-button confirm>默认</bc-button>
    <bc-button confirm="是否执行该操作？">执行确认</bc-button>
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'buttonConfirm',
  components: {
    codeCard,
  },
  data() {
    return {
      config,
    }
  }
}
</script>
