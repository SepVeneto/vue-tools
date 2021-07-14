<template>
  <section class="wrapper">
    <svg-icon icon="bcEdit" />
    <basic />
    <custom-cell />
    <custom-header />
    <multile-header />
    <row-span />
    <ellipsis />
    <radio />
    <cell-edit />
    <simple-table />
    <table-page />
    <table-api />
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
  },
}
</script>
