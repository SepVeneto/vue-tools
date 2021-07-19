<template>
  <code-card v-bind="config">
    <bc-select v-model="select" width="180px" :options="options" />
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'basicInput',
  components: {
    codeCard,
  },
  data() {
    return {
      config,
      select: '',
      options: [
        { label: '维内托 维托里奥', value: 'vv' },
        { label: '安德烈亚 多利亚', value: 'Andrea Doria' },
      ]
    }
  }
}
</script>
