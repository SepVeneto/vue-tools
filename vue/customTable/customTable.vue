<template>
  <el-table class="custom-table" ref="elTable" :data="data" v-bind="$attrs" v-on="$listeners">
    <el-table-column
      v-for="item in tableConfig"
      :key="item.prop"
      v-bind="{...item}"
    >
      <template #header="{column, $index}">
        <move-header
          :columnOperate="columnOperate"
          :column="column"
          :layout="generateLayout($index)"
          :onMoveColumn="direct => handleMoveColumn(column, direct)"
          :onRemove="handleRemove"
        />
      </template>
      <template #default="{row, column, $index}">
        <slot
          :name="item.prop"
          v-bind="{row, column, $index}"
        >
          {{item.filter ? item.filter[row[column.property]] : row[column.property]}}
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import moveHeader from './moveHeader';
export default {
  name: 'custom-table',
  props: {
    data: {
      type: Array,
      required: true
    },
    config: {
      type: Array,
      required: true
    },
    columnOperate: {
      type: Boolean,
      default: false
    }
  },
  components: {
    moveHeader
  },
  computed: {
    tableConfig() {
      console.log(this.config)
      return [...this.config];
    }
  },
  // data() {
  //   return {
  //     tableConfig: [...this.config]
  //   }
  // },
  methods: {
    generateLayout(index) {
      const layout = ['remove'];
      if (index < 2) {
        return [];
      }
      index > 2 && layout.push('left');
      index !== this.config.length - 1 && layout.push('right');
      return layout;
    },
    handleMoveColumn(column, direct) {
      this.$emit('moveColumn', column, direct);
    },
    handleRemove(column) {
      this.$emit('removeColumn', column);
    }
  }
}
</script>

<style scoped lang="scss">
.custom-table {
  /* 隐藏表格expand原先的图标 */
  & /deep/ .el-table__expand-column .el-icon-arrow-right {
    display: none;
  }
  & /deep/ .el-table__expand-icon {
    &::before {
      transition: all .4s;
      content: '';
      display: block;
      background: #222;
      position: absolute;
      width: 10px;
      height: 1px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      transition: all .4s;
      content: '';
      display: block;
      background: #222;
      position: absolute;
      width: 1px;
      height: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  & /deep/ .el-table__expand-icon--expanded {
    transition: all .4s;
    transform: none;
    &::before {
      transform: translate(-50%, -50%) rotate(180deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-90deg);
    }
  }
}
</style>
