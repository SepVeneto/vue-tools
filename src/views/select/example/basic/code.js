export default {
  title: '基本用法',
  desc: 'bcSelect的基本用法',
  tag: 'basic-select',
  code: `<template>
  <bc-select v-model="select" width="180px" />
</template>
<script>
export default {
  data() {
    return {
      select: '',
    }
  }
}
</script>`
}
