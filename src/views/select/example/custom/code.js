export default {
  title: '自定义名称',
  desc: '',
  tag: 'select-custom',
  code: `<template>
  <bc-select
    v-model="select"
    width="180px"
    custom-label="name"
    custom-value="alias"
    :options="options"
  />
</template>
<script>
export default {
  data() {
    return {
      select: '',
      options: [
        { name: '维托里奥 维内托', alias: 'vv' },
        { name: '安德烈亚 多利亚', alias: 'Andrea Doria' },
      ]
    }
  },
}
</script>`
}
