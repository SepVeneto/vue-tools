export default {
  title: '高级搜索',
  desc: '',
  tag: 'search-advance',
  code: `<template>
  <bc-search
    v-model="params"
    :config="searchConfig"
    advance
    :fields="tableConfig"
    :search="noop"
  />
</template>
<script>
export default {
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
