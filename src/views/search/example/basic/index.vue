<template>
  <code-card v-bind="config">
    <bc-search
      v-model="params"
      :config="searchConfig"
      create
      @create="handleCreate"
      @export="handleExport"
      :search="noop"
    />
    <div><pre>{{params}}</pre></div>
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
      searchConfig: [
        { catalog: 'input', name: '名称', prop: 'name' },
      ],
      params: {},
      config,
    }
  },
  methods: {
    noop() {},
    handleExport() {
      console.log('trigger export');
    },
    handleCreate() {
      console.log('trigger create', this.params);
    }
  }
}
</script>
