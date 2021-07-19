export default {
  title: '展示模式',
  desc: '',
  tag: 'input-display',
  code: `<template>
  <bc-input v-model="text" width="180px" only-display />
</template>
<script>
export default {
  data() {
    return {
      text: 'bcInput',
    }
  }
}
</script>`
}
