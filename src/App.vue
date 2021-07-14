<template>
  <div id="app">
    <aside class="menu">
      <ul>
        <li
          :class="['menu-link', { 'is-active': active === item.prop }]"
          v-for="item in menus"
          :key="item.prop"
          @click="handleClick(item.prop)"
        >{{item.name}}</li>
      </ul>
    </aside>
    <router-view />
  </div>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/color-brewer.css'

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
      menus: [
        { name: '表格', prop: 'table' },
        { name: '输入框', prop: 'input' },
        { name: '选择框', prop: 'select' },
        { name: '按钮', prop: 'button' },
        { name: '搜索栏', prop: 'search' },
        { name: '开关', prop: 'switch' },
      ]
    }
  },
  methods: {
    handleClick(prop) {
      this.active = prop;
      this.$router.push({ name: prop })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'YaHei';
  display: flex;
}
.menu {
  width: 200px;
}
.wrapper {
  margin: 0 auto;
}
.is-active {
  background: #4903ff;
  color: #fff;
}
.menu-link {
  cursor: pointer;
  padding: 10px 20px;
  transition: all .3s;
  &:hover {
    background: #490eff;
    color: #fff;
  }
}
</style>
