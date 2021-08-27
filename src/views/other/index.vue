<template>
  <section class="wrapper">
    <aside-menu :menus="config" />
    <main>
      <component
        class="container"
        v-for="item in asides"
        :key="item.prop"
        :is="item.prop"
      ></component>
    </main>
  </section>
</template>

<script>
import { line2Camel } from '@/utils/tools';
import ClickCopy from './example/clickCopy';
import ConfigProvider from './example/configProvider';
import AsideMenu from '@/views/components/asideMenu.vue';
import { other as config } from '@/config';
export default {
  name: 'otherExample',
  components: {
    ClickCopy,
    ConfigProvider,
    AsideMenu,
  },
  computed: {
    asides() {
      const res = config.map(item => {
        return {
          ...item,
          prop: line2Camel(item.prop),
        }
      })
      return res;
    }
  },
  data() {
    return {
      config,
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>
