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
import BasicSelect from './example/basic';
import SelectApi from './example/api';
import SelectCustom from './example/custom';
import SelectObject from './example/object';
import SelectDefault from './example/defaultValue';
import SelectDisplay from './example/display';
import { select as config } from '@/config';
export default {
  name: 'selectExample',
  components: {
    AsideMenu,
    BasicSelect,
    SelectApi,
    SelectCustom,
    SelectObject,
    SelectDefault,
    SelectDisplay,
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
</style>
