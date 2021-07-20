export default {
  title: '绑定对象',
  desc: '',
  tag: 'select-object',
  code: `<template>
  <bc-select
    v-model="select"
    width="180px"
    option-key="alias"
    custom-label="name"
    :options="options"
  />
</template>
<script>
export default {
  data() {
    return {
      select: '',
      options: [
        { name: '维内托 维托里奥', alias: 'vv' },
        { name: '安德烈亚 多利亚', alias: 'Andrea Doria' },
      ]
    }
  },
}
</script>`
}
