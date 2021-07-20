export default {
  title: '默认值',
  desc: '',
  tag: 'select-default',
  code: `<template>
  <bc-select
    v-model="select"
    width="180px"
    :options="options"
    default-value="vv"
  />
</template>
<script>
export default {
  data() {
    return {
      select: '',
      options: [
        { label: '维托里奥 维内托', value: 'vv' },
        { label: '安德烈亚 多利亚', value: 'Andrea Doria' },
      ]
    }
  },
}
</script>`
}
