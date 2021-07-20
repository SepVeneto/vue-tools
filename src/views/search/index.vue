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
import AsideMenu from '@/views/components/asideMenu.vue';
import BasicSearch from './example/basic';
import SearchUpload from './example/upload';
import SearchAdvance from './example/advance';
import SearchCustom from './example/custom';
import { search as config } from '@/config';
export default {
  name: 'searchExample',
  components: {
    AsideMenu,
    BasicSearch,
    SearchUpload,
    SearchAdvance,
    SearchCustom,
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
