<template>
  <code-card v-bind="config">
    <bc-search
      v-model="params"
      :search="noop"
      :config="searchConfig"
      :upload="{
        text: '导入xlsx',
        templateApi: noop,
        uploadApi: noop,
      }"
    />
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
      searchConfig: [
        { catalog: 'input', name: '名称', prop: 'name' },
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
