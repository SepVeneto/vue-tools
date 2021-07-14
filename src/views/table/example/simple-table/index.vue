<template>
  <code-card
    class="container"
    v-bind="config"
  >
    <bc-table
      :config="tableConfig"
      :data="tableData"
      simple
      pagination
    >
    </bc-table>
  </code-card>
</template>

<script>
import Mock from 'mockjs';
import basicData from '../basicData.json';
import mixins from '../mixins';
import config from './code';
export default {
  name: 'simpleTable',
  mixins: [mixins],
  data() {
    return {
      config,
      tableConfig: [
        { label: '姓名', prop: 'name' },
        { label: '年龄', prop: 'age' },
        { label: '身高', prop: 'height', unit: 'm' },
        { label: '体重', prop: 'weight', unit: 'kg' },
      ],
      tableData: basicData,
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      const data = Mock.mock({
        [`rows|${100}`]: [{
          name: '@cname',
          age: '@integer(1,100)',
          height: '@float(100, 180, 2, 2)',
          weight: '@float(40, 100, 2, 2)'
        }]
      })
      this.tableData = data.rows;
    }
  }
}
</script>
