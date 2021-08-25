export default {
  title: '默认值',
  desc: '',
  tag: 'search-defaultValue',
  code: `<template>
  <bc-search
    v-model="params"
    :search="noop"
    :config="searchConfig"
    :default-value="defaultValue"
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
      defaultValue: {},
    }
  },
  created() {
    setTimeout(() => {
      this.defaultValue = {
        name: test,
      }
    }, 2000)
  },
  methods: {
    handleReset() {
      console.log(this.params)
    },
    noop() {},
  }
}
</script>`
}
