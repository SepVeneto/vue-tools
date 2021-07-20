export default {
  title: '自定义内容',
  desc: '',
  tag: 'search-custom',
  code: `<template>
  <bc-search
    v-model="params"
    :search="noop"
    :config="searchConfig"
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
  }
}
</script>`
}
