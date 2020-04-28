<template>
  <el-col :span="span">
    <el-form-item v-bind="$attrs">
      <slot />
    </el-form-item>
  </el-col>
</template>

<script>
export default {
  name: 'form-item',
  functional: true,
  props: {
    span: {
      type: Number,
      required: true
    }
  }
}
</script>
