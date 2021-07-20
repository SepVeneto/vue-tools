<template>
  <code-card v-bind="config">
    <bc-button
      class="el-icon-edit"
      type="primary"
      mini
      tooltip
    >编辑</bc-button>
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'buttonMini',
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
