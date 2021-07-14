<template>
  <code-card
    class="container"
    v-bind="config"
  >
    <bc-table
      :config="tableConfig"
      :data="tableData"
    >
      <template #name="{row}">
        <span>{{row.name}}</span>
      </template>
      <template #operate="{row}">
        <bc-button type="edit" @click="handleEdit(row)">编辑</bc-button>
        <bc-button type="delete" @click="handleRemove(row)">删除</bc-button>
      </template>
    </bc-table>
  </code-card>
</template>

<script>
import Mock from 'mockjs';
import mixins from '../mixins';
import config from './code';
export default {
  name: 'ExampleCustomCell',
  mixins: [mixins],
  data() {
    return {
      config,
      tableConfig: [
        { label: '姓名', prop: 'name' },
        { label: '年龄', prop: 'age' },
        { label: '身高', prop: 'height' },
        { label: '体重', prop: 'weight' },
        { label: '操作', prop: 'operate' },
      ],
      tableData: Mock.mock({
        'rows|10': [{
          name: '@cname',
          age: '@integer(1,100)',
          height: '@float(100, 180, 2, 2)',
          weight: '@float(40, 100, 2, 2)'
        }],
      }).rows
    }
  },
  methods: {
    handleEdit(row) {
      console.log('edit', row);
    },
    handleRemove(row) {
      console.log('remove', row)
    }
  }
}
</script>
