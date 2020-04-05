<template>
  <el-select
    :value="value"
    @input="val => $emit('input', val)"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-option
      v-for="item in options"
      :key="item[customValue]"
      :label="item[customLabel]"
      :value="item[customValue]"
    >
      <slot v-bind="{...item}"/>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'select-options',
  functional: true,
  props: {
    value: {
      type: String || Number,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    customLabel: {
      type: String,
      default: 'label'
    },
    customValue: {
      type: String,
      default: 'value'
    }
  }
}
</script>
