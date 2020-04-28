<template>
  <span class="header-operate">
    <span>{{column.label}}</span>
    <template v-if="columnOperate">
      <span
        v-show="layout.includes('remove')"
        class="operate el-icon-close"
        @click="onRemove(column)"
        title="移除"
      ></span>
      <span
        v-show="layout.includes('left')"
        class="operate el-icon-arrow-left"
        @click="onMoveColumn('left')"
        title="向左移动"
      ></span>
      <span
        v-show="layout.includes('right')"
        class="operate el-icon-arrow-right"
        @click="onMoveColumn('right')"
        title="向右移动"
      ></span>
    </template>
  </span>
</template>

<script>
export default {
  name: 'move-header',
  props: {
    layout: {
      type: Array
    },
    column: {
      type: Object
    },
    columnOperate: {
      type: Boolean,
      default: true
    },
    onMoveColumn: {
      type: Function,
      required: true
    },
    onRemove: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.header-operate {
  display: inline-block;
  width: 100%;
  .operate {
    opacity: 0;
    cursor: pointer;
    margin-left: 4px;
    transition: opacity .25s;
  }

  &:hover {
    .operate {
      opacity: 1;
    }
  }
}
</style>
