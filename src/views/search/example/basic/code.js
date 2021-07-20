export default {
  title: '基本用法',
  desc: 'bcSearch的基本用法',
  tag: 'basic-search',
  sort: 1,
  code: `<template>
  <bc-search
    v-model="params"
    :config="searchConfig"
    :search="noop"
    create
    @create="handleCreate"
    @export="handleExport"
  />
</template>
<script>
export default {
  data() {
    return {
      searchConfig: [
        { catalog: 'input', name: '名称', prop: 'name' },
      ]
      params: {},
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
</script>`
}
