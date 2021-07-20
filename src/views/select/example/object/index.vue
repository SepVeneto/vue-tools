<template>
  <code-card v-bind="config">
    <bc-select
      v-model="select"
      width="180px"
      value-key="alias"
      custom-label="name"
      :options="options"
    />
    <div><pre>{{select}}</pre></div>
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'selectObject',
  components: {
    codeCard,
  },
  data() {
    return {
      config,
      select: '',
      options: [
        { name: '维托里奥 维内托', alias: 'vv' },
        { name: '安德烈亚 多利亚', alias: 'Andrea Doria' },
      ]
    }
  }
}
</script>
