<template>
  <code-card v-bind="config">
    <div id="copy-text">复制文本</div>
    <bc-clipboard dom="#copy-text">
      <bc-button>点击复制</bc-button>
    </bc-clipboard>
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'ClickCopy',
  components: {
    codeCard,
  },
  data() {
    return {
      config,
    }
  },
}
</script>
