<template>
  <aside class="aside">
    <ul>
      <li
        v-for="each in menus"
        :class="['menu-link']"
        :key="each.prop"
        @click="handleClick(each.prop)"
      >{{each.name}}</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'asideMenu',
  props: {
    menus: {
      type: Array,
      default: () => [],
    }
  },
  mounted() {
    this.goAnchor();
  },
  methods: {
    goAnchor() {
      if (location.href.match(/#/g).length > 1) {
        const anchor = location.href.match(/#[^#]+$/);
        if (!anchor) {
          return;
        }
        const elm = document.querySelector(anchor[0]);
        if (!elm) {
          return;
        }
        setTimeout(() => {
          document.querySelector('html').scrollTop = elm.offsetTop;
        })
      }
    },
    handleClick(anchor) {
      const element = document.querySelector(`#${anchor}`);
      const { location } = this.$router.resolve(`#${anchor}`);
      this.$router.push(location)
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  width: 240px;
  float: left;
  top: 10px;
  position: sticky;
}
</style>
