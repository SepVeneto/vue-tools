<template>
  <code-card
    class="container"
    v-bind="config"
  >
    <bc-table
      :config="tableConfig"
      :data="tableData"
    />
  </code-card>
</template>

<script>
import bcTable from 'components/bcTable/bcTable.jsx';
import Mock from 'mockjs';
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'ExampleBasic',
  components: {
    bcTable,
    codeCard,
  },
  data() {
    return {
      config: Object.freeze(config),
      tableConfig: [
        { label: '姓名', prop: 'name' },
        { label: '年龄', prop: 'age' },
        { label: '身高', prop: 'height', unit: 'm' },
        { label: '体重', prop: 'weight', unit: 'kg' },
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
  }
}
</script>
