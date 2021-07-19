<template>
  <div id="app">
    <aside class="menu">
      <ul style="position: sticky; top: 10px">
        <li v-for="item in menus" :key="item.prop" >
          <div
            :class="['menu-link', { 'is-active': active === item.prop }]"
            @click="handleClick(item.prop)"
          >{{item.name}}</div>
        </li>
      </ul>
    </aside>
    <main style="width: 100%">
      <router-view />
    </main>
    <template>
      <el-backtop>
        <i class="top-icon el-icon-caret-top" ></i>
      </el-backtop>
    </template>
  </div>
</template>

<script>
import menuData from './config';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/color-brewer.css'
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);

export default {
  name: 'App',
  created() {
    hljs.configure({
      ignoreUnescapedHTML: true,
    })
    hljs.highlightAll();
  },
  data() {
    return {
      active: '',
      menus: menuData,
    }
  },
  mounted() {
    // const element = document.querySelector(`#${anchor.replace(/#/, '')}`);
    // element.scrollIntoView();
  },
  methods: {
    handleClick(prop, anchor) {
      this.active = prop;
      this.$router.push({ name: prop })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  .top-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #409eff;
    color: #fff;

  }
}
</style>

<style lang="scss">
#app {
  font-family: 'YaHei';
  display: flex;
}
.menu {
  width: 200px;
}
.is-active {
  background: #4903ff;
  color: #fff;
}
.menu-link {
  cursor: pointer;
  padding: 10px 20px;
  transition: all .3s;
  white-space: nowrap;
  &:hover {
    background: #490eff;
    color: #fff;
  }
}
</style>
