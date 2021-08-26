<script>
export default {
  name: 'BcConfigProvider',
  props: {
    config: Object,
  },
  provide() {
    return { configProvider: this.config };
  },
  render() {
    return this.$slots.default
  }
}
</script>
