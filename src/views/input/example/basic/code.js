export default {
  title: '基本用法',
  desc: 'bcInput的基本用法',
  tag: 'basic-input',
  code: `
<template>
  <bc-input v-model="text" />
</template>
<script>
export default {
  data() {
    return {
      text: '',
    }
  }
}
</script>
  `
}
