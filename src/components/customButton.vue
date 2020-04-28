<script>
export default {
  name: 'custom-button',
  props: {
    label: [String],
    needConfirm: [Boolean],
    confirmButtonText: [String],
    cancelButtonText: [String],
    message: [String],
    options: [Object]
  },
  render(h) {
    const button = (
      <el-button { ...this.options }>{this.label}</el-button>
    );
    const confirm = (
      <el-popover placement="top">
        <div><i class="el-popconfirm__icon el-icon-question"></i>
          {this.message}
        </div>
        <div class="operate">
          <el-button
            type="primary"
            onClick={this.$emit('confirm')}
          >确认</el-button>
          <el-button
            onClick={this.$emit('cancel')}
          >取消</el-button>
          {button}
        </div>
      </el-popover>
    )
    return this.needConfirm ? confirm : button
  }
}
</script>