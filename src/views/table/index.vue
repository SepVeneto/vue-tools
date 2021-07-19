<template>
  <section class="wrapper">
    <aside-menu :menus="menus" />
    <main>
      <basic />
      <cell-edit />
      <custom-cell />
      <custom-header />
      <ellipsis />
      <multile-header />
      <radio />
      <row-span />
      <simple-table />
      <table-api />
      <table-page />
    </main>
  </section>
</template>

<script>
import basic from './example/basic/index.vue';
import customCell from './example/custom-cell/index.vue';
import customHeader from './example/custom-header/index.vue';
import multileHeader from './example/multile-header/index.vue';
import rowSpan from './example/row-span/index.vue';
import ellipsis from './example/ellipsis/index.vue';
import radio from './example/radio/index.vue';
import cellEdit from './example/cell-edit/index.vue';
import simpleTable from './example/simple-table/index.vue';
import tablePage from './example/table-page/index.vue';
import tableApi from './example/table-api/index.vue';
import { table as menus } from '@/config';
import AsideMenu from '../components/asideMenu.vue';
export default {
  components: {
    basic,
    customCell,
    customHeader,
    multileHeader,
    rowSpan,
    ellipsis,
    radio,
    cellEdit,
    simpleTable,
    tablePage,
    tableApi,
    AsideMenu,
  },
  data() {
    return {
      menus,
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>
