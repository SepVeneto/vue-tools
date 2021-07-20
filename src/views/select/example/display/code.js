export default {
  title: '展示模式',
  desc: '',
  tag: 'select-display',
  code: `<template>
  <bc-select
    v-model="select"
    width="180px"
    :options="options"
    only-display
  />
</template>
<script>
export default {
  data() {
    return {
      select: 'vv',
      options: [
        { label: '维托里奥 维内托', value: 'vv' },
        { label: '安德烈亚 多利亚', value: 'Andrea Doria' },
      ]
    }
  },
}
</script>`
}
