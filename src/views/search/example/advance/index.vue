<template>
  <code-card v-bind="config">
    <bc-search
      v-model="params"
      :config="searchConfig"
      advance
      :fields="tableConfig"
      :search="noop"
    />
    <div><pre>{{params}}</pre></div>
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
      tableConfig: [
        { label: '名称', prop: 'name' },
        { label: '名称1', prop: 'name1' },
        { label: '名称2', prop: 'name2' },
        { label: '名称3', prop: 'name3' },
        { label: '名称4', prop: 'name4' },
        { label: '名称5', prop: 'name5' },
        { label: '名称6', prop: 'name6' },
        { label: '名称7', prop: 'name7' },
        { label: '名称8', prop: 'name8' },
        { label: '名称9', prop: 'name9' },
      ],
      searchConfig: [
        { catalog: 'input', name: '名称', prop: 'name' },
      ],
      params: {},
      config,
    }
  },
  methods: {
    noop() {},
  }
}
</script>
