<template>
  <code-card v-bind="config">
    <bc-select
      v-model="select"
      width="180px"
      :options="options"
      only-display
    />
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'selectDisplay',
  components: {
    codeCard,
  },
  data() {
    return {
      config,
      select: 'vv',
      options: [
        { label: '维托里奥 维内托', value: 'vv' },
        { label: '安德烈亚 多利亚', value: 'Andrea Doria' },
      ]
    }
  }
}
</script>
