export default {
  title: '从接口获取',
  desc: '',
  tag: 'select-api',
  code: `<template>
  <bc-select v-model="select" width="180px" :api="getOptions" />
</template>
<script>
export default {
  data() {
    return {
      select: '',
    }
  },
  methods: {
    getOptions() {
      return Promise.resolve({
        data: [
          { label: '维托里奥 维内托', value: 'vv' },
          { label: '安德烈亚 多利亚', value: 'Andrea Doria' },
        ]
      })
    }
  }
}
</script>`
}
