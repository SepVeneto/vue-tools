export default {
  title: '点击复制',
  desc: '',
  tag: 'click-copy',
  code: `<template>
  <div>
    <div id="copy-text">复制文本</div>
    <bc-clipboard dom="#copy-text">
      <bc-button>点击复制</bc-button>
    </bc-clipboard>
  </div>
</template>
<script>
export default {
}
</script>`
}
