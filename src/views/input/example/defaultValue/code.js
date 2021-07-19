export default {
  title: '默认值',
  desc: '',
  tag: 'input-default',
  code: `<template>
  <bc-input v-model="text" width="180px" default-value="bcInput" />
</template>
<script>
export default {
  data() {
    return {
      text: '',
    }
  }
}
</script>`
}
