<script>
export default ({
  name: 'bc-dialog',
  inheritAttrs: false, // 不被作为props的attributes不会暴露在组件的根元素上
  props: {
    noFooter: Boolean
  },
  data() {
    return {
      fullscreen: false,
      isFullscreen: false,
    }
  },
  created() {
    this.fullscreen = !!this.$attrs.fullscreen;
    this.isFullsccreen = !!this.$attrs.fullscreen || this.$attrs.fullscreen === '';
  },
  methods: {
    handleFullScreen() {
      this.fullscreen = !this.fullscreen;
      console.log(this.fullscreen)
    },
    handleCancel() {
      this.$emit('update:modelValue', false);
      this.$emit('cancel');
    }
  },
  render(h) {
    const dialog = () => {
      const footer = () => (
        <footer>
          <el-button on-click={this.handleCancel}>取消</el-button>
          <el-button type="primary" onClick={() => this.$emit('submit')}>确认</el-button>
        </footer>
      );
      const title = () => (
        <header class="dialog-title">
          <span class="text">{this.$attrs.title}</span>
          {!this.isFullscreen && <i class="icon el-icon-full-screen" onClick={this.handleFullScreen}></i>}
        </header>
      );
      return (
        <el-dialog
          close-on-click-modal={false}
          {...{
            attrs: this.$attrs,
            props: {
              fullscreen: this.fullscreen,
            },
            scopedSlots: {
              title,
              footer: () => (!this.$props.noFooter && ((this.$slots.footer) || footer()))
            },
            on: this.$listeners
          }}
        >
          <el-scrollbar ref="scrollbar" class={['scrollbar', { isFullscreen: this.$attrs.fullscreen || this.$attrs.fullscreen === '' }]}>
            {this.$slots.default}
          </el-scrollbar>
        </el-dialog>
      )
    }
    return dialog();
  }
})
</script>

<style lang="scss" scoped>
.dialog-title {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  .icon {
    align-self: flex-start;
    cursor: pointer;
  }
  .text {
    font-size: 18px;
  }
}
.scrollbar {
  &::v-deep(.el-scrollbar__wrap) {
    max-height: 500px;
    padding-bottom: 17px;
  }
  &::v-deep(.el-scrollbar__view) {
    padding-right: 14px;
  }
}
.isFullscreen {
  &:deep(.el-scrollbar__wrap) {
    max-height: calc(100vh - 200px);
  }
}
</style>
