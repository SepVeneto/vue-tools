export default {
  title: '密码输入',
  desc: '',
  tag: 'input-password',
  code: `<template>
  <bc-input v-model="text" width="180px" password />
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
