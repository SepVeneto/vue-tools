<template>
  <code-card v-bind="config">
    <div id="copy-text">全局配置</div>
    <p>基于Vue的provide/inject，可以实现一次配置，全局生效，主要用于针对不同后端分页规范不同，选项的键值对名称不一样</p>
    <pre>{{JSON.parse(JSON.stringify({
      table: {
        arrayName: 'rows',
        pageName: 'page',
        pageSizeName: 'pageSize',
      },
      select: {
        label: 'label',
        value: 'value',
      }
    }), 2)}}</pre>
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'ConfigProvider',
  components: {
    codeCard,
  },
  data() {
    return {
      config,
    }
  },
}
</script>
