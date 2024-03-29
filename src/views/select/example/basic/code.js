export default {
  title: '基本用法',
  desc: 'bcSelect的基本用法',
  tag: 'basic-select',
  sort: 1,
  code: `<template>
  <bc-select
    v-model="select"
    width="180px"
    :options="options"
    :label.sync="label"
  />
</template>
<script>
export default {
  data() {
    return {
      select: '',
      label: '',
      options: [
        { label: '维托里奥 维内托', value: 'vv' },
        { label: '安德烈亚 多利亚', value: 'Andrea Doria' },
      ]
    }
  }
}
</script>`
}
