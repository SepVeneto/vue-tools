export default {
  title: '上传',
  desc: '',
  tag: 'search-upload',
  code: `<template>
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
    handleCreate() {
      console.log('trigger create');
    },
    noop() {},
  }
}
</script>`
}
