<template>
  <section :id="tag">
    <div class="title">
      <a :href="`#${tag}`">#</a>
      <span>{{title}}</span>
    </div>
    <div class="desc">{{desc}}</div>
    <div class="area">
      <div class="demo"><slot /></div>
      <div class="code">
        <transition name="collapse">
          <pre v-if="show"><code ref="codeRef" class="html hljs xml">{{code}}</code></pre>
        </transition>
      </div>
      <div :class="['operate-button', {'is-show': show}]">
        <bc-button @click="handleClick" type="text">{{show ? '收起' : '展开'}}代码</bc-button>
      </div>
    </div>
  </section>
</template>

<script>
import hljs from 'highlight.js/lib/core';
export default {
  name: 'codeCard',
  props: {
    title: String,
    code: String,
    desc: String,
    tag: String,
  },
  computed: {
    codes () {
      const codeRef = this.$refs.codeRef;
      if (codeRef) {
        const res = hljs.highlightBlock(this.$refs.codeRef)
        return res;
      } else {
        return '';
      }
    }
  },
  data() {
    return {
      show: false,
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleClick() {
      this.show = !this.show;
      this.$nextTick().then(() => {
        const codeRef = this.$refs.codeRef;
        if (codeRef) {
          const res = hljs.highlightElement(this.$refs.codeRef)
          console.log(res)
          return res;
        } else {
          return '';
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  font-weight: bold;
  position: relative;
  padding: 10px 0;
  > a {
    position: absolute;
    left: -20px;
    transition: opacity 0.4s;
    opacity: 0;
  }
  &:hover > a {
    opacity: 0.8;
  }
}
.hljs {
  display: block;

  line-height: 1.8;
  font-family: Menlo,Monaco,Consolas,Courier,monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;

  margin: 0;
  border: none;
  max-height: none;
  border-radius: 0;
}
.area {
  box-shadow: 0 0 3px #333;
  border-radius: 6px;
  .demo {
    padding: 10px;
  }
}
.code {
  position: relative;
}
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.3s linear;
}
.collapse-enter, .collapse-leave-to {
  max-height: 0;
}
.collapse-enter-to, .collapse-leave {
  max-height: 200vh;
}
.operate-button {
  height: 30px;
  background: #efefef;
  text-align: center;
}
.operate-button.is-show {
  position: sticky;
  bottom: 0;
}

// .collapse-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   height: 100%;
// }
</style>
