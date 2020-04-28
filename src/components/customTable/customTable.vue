<template>
  <el-table
    class="custom-table"
    ref="elTable"
    :data="tableData"
    v-bind="$attrs"
    v-on="$listeners"
    :span-method="spanMethod"
  >
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
      <template v-if="item.type === 'expand'" #default="{row, column, $index}">
        <slot name="expand" v-bind="{row, column, $index}" />
      </template>
      <template v-else-if="!item.type" #default="{row, column, $index}">
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
    colspan: Boolean,
    colspanOptions: {
      type: Object,
      default: () => ({
        includes: [],
        parentProp: null,
      }),
    },
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
      return [...this.config];
    },
    totalColumn() {
      const { includes=[], parentProp=null } = this.colspanOptions;
      const totalColumn = {};
      const whiteList = {};
      includes.forEach(item => {
        whiteList[item] = 0;
      });
      this.tableData.forEach(item => {
        Object.keys(item).forEach(key => {
          if (!Object.keys(whiteList).includes(key)) {
            return;
          }
          const spanKey = parentProp
            ? `${item[parentProp]}_${key}_${item[key]}`
            : `${key}_${item[key]}`;
          const column = totalColumn[spanKey];
          if (!item[key]) {
            whiteList[key] += 1;
            return;
          }
          if (column != null) {
            Object.assign(totalColumn[spanKey], { num: column.num + 1 });
          } else {
            totalColumn[spanKey] = {
              index: whiteList[key],
              num: 1
            };
          }
          whiteList[key] += 1;
        })
      })
      return totalColumn;
    },
    tableData() {
      return [...this.data];
    }
  },
  // data() {
  //   return {
  //     tableConfig: [...this.config]
  //   }
  // },
  methods: {
    spanMethod({ row, column, rowIndex, columnIndex }) {
      const { includes=[], parentProp=null } = this.colspanOptions;
      const key = column.property;
      const spanKey = parentProp
        ? `${row[parentProp]}_${key}_${row[key]}`
        : `${key}_${row[key]}`;
      if (!includes.includes(key) || row[key] == null) {
        return {
          colspan: 1,
          rowspan: 1,
        };
      }
      if (rowIndex === this.totalColumn[spanKey].index) {
        return {
          colspan: 1,
          rowspan: this.totalColumn[spanKey].num,
        }
      } else {
        return [0, 0];
      }
    },
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
