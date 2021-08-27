export default {
  title: '全局配置',
  desc: '',
  tag: 'config-provider',
  code: `<template>
  <bc-config-provider :config="globalConfig">
    <router-view />
  </bc-config-provider>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      globalConfig: {
        table: {
          arrayName: 'rows',
          pageName: 'page1',
          pageSizeName: 'pageSize',
        },
        select: {
          label: 'label',
          value: 'value',
        }
      }
    }
  }
}
</script>`
}
