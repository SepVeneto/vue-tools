<template>
  <code-card
    class="container"
    v-bind="config"
  >
    <bc-table
      :config="tableConfig"
      :data="tableData"
      pagination
      :params.sync="params"
      :api="getList"
      :custom="false"
    >
    </bc-table>
  </code-card>
</template>

<script>
import Mock from 'mockjs';
import mixins from '../mixins';
import config from './code';
export default {
  name: 'tablePage',
  mixins: [mixins],
  data() {
    return {
      config,
      params: {
        page: 1,
        rows: 10,
      },
      total: 100,
      tableConfig: [
        { label: '姓名', prop: 'name' },
        { label: '年龄', prop: 'age' },
        { label: '身高', prop: 'height', unit: 'm' },
        { label: '体重', prop: 'weight', unit: 'kg' },
      ],
      tableData: [],
    }
  },
  methods: {
    getList() {
      const { rows } = this.params;
      const data = Mock.mock({
        [`rows|${rows}`]: [{
          name: '@cname',
          age: '@integer(1,100)',
          height: '@float(100, 180, 2, 2)',
          weight: '@float(40, 100, 2, 2)'
        }]
      })
      return Promise.resolve({
        data: {
          ...data,
          total: 100,
        }
      })
    }
  }
}
</script>
