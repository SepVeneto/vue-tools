<template>
  <section class="wrapper">
    <aside class="aside">
      <ul>
        <li
          v-for="each in menus"
          :class="['menu-link']"
          :key="each.prop"
          @click="handleClick(each.prop)"
        >
          <router-link :to="`#${each.prop}`">{{each.name}}</router-link>
        </li>
      </ul>
    </aside>
    <main class="container">
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
  data() {
    return {
      menus,
    }
  },
  mounted() {
    setTimeout(() => {
      const anchor = this.$route.hash;
      // eslint-disable-next-line no-self-assign
      window.location = window.location;
      window.location.hash = anchor
    }, 1000)
  },
  methods: {
    handleClick(anchor) {
      const element = document.querySelector(`#${anchor}`);
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  .aside > ul {
    top: 10px;
    position: sticky;
  }
}
</style>
