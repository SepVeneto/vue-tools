<template>
  <div @click="handleClick"><slot /></div>
</template>

<script>
import { copyText } from '@/utils/tools';
export default {
  name: 'BcClipboard',
  props: {
    dom: String,
    text: String,
    message: {
      type: String,
      default: '复制成功',
    },
    success: {
      type: Function,
      default: () => {},
    }
  },
  methods: {
    handleClick() {
      let text = '';
      if (this.text) {
        text = this.text;
      } else {
        const contentDom = this.$parent.$el.querySelector(this.dom);
        text = contentDom.textContent || contentDom.value;
      }
      copyText(text).then(() => {
        this.success();
        this.$message.success(this.message)
      })
    }
  }
}
</script>
