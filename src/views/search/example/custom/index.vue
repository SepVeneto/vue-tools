<template>
  <code-card v-bind="config">
    <bc-search
      v-model="params"
      :search="noop"
      :config="searchConfig"
      :layout="['reset', 'search']"
    >
      <template #name>
        <bc-select v-model="params.name" :options="options" />
      </template>
      <bc-button>批量修改</bc-button>
    </bc-search>
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'searchUpload',
  components: {
    codeCard,
  },
  data() {
    return {
      options: [
        { label: '维托里奥 维内托', value: 'vv' },
        { label: '安德烈亚 多利亚', value: 'Andrea Doria' },
      ],
      searchConfig: [
        { catalog: 'custom', name: '名称', prop: 'name' },
      ],
      params: {},
      config,
    }
  },
  methods: {
    handleCreate() {
      console.log('trigger create');
    },
    noop() {},
  }
}
</script>
