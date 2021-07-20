export default {
  title: '基本用法',
  desc: 'bcSwitch的基本用法',
  tag: 'basic-switch',
  sort: 1,
  code: `<template>
  <bc-switch v-model="model" />
</template>
<script>
export default {
  data() {
    return {
      model: false,
    }
  }
}
</script>`
}
