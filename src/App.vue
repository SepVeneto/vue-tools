<template>
  <div class="container">
    <el-button @click="handleClick">合并列</el-button>
    <custom-table
      :data="tableData"
      :config="tableConfig"
      colspan
      :colspanOptions="{
        includes: ['model', 'group', 'type']
      }"
    >
      <template #operate="{}">
        <el-button type="primary">改造</el-button>
        <el-button type="danger">退役</el-button>
      </template>
    </custom-table>
  </div>
</template>

<script>
import customTable from '@/components/customTable/customTable';
const tableConfig = [
  { label: '所属团体', prop: 'group' },
  { label: '型号', prop: 'model'},
  { label: '舰种', prop: 'type' },
  { label: '姓名', prop: 'name' },
  { label: '下水日', prop: 'date' },
  { label: '出身', prop: 'address' },
  { label: '操作', prop: 'operate' },
];
export default {
  name: 'App',
  components: {
    customTable,
  },
  data() {
    return {
      tableConfig,
      tableData: [
        { type: '战列舰', model: '维内托级', group: '意大利海军', name: '维托里奥•维内托', date: '1937-07-25', address: '意大利里雅斯特湾C.R.D.A造船厂' },
        { type: '战列舰', model: '安德烈亚·多利亚级', group: '意大利海军', name: '安德烈亚•多利亚', date: '1913-03-30', address: '意大利拉斯佩齐亚船厂'}
      ]
    }
  },
  methods: {
    handleClick() {
      this.tableData = [
        { type: '战列舰', model: '维内托级', group: '意大利海军', name: '维托里奥•维内托', date: '1937-07-25', address: '意大利里雅斯特湾C.R.D.A造船厂' },
        { type: '战列舰', model: '维内托级', group: '意大利海军', name: '利托里奥', date: '1937-08-22', address: '' },
        { type: '战列舰', model: '维内托级', group: '意大利海军', name: '罗马', date: '1942-06-14', address: '' },
        { type: '战列舰', model: '维内托级', group: '意大利海军', name: '帝国', date: '未完工', address: '' },
        { type: '战列舰', model: '安德烈亚·多利亚级', group: '意大利海军', name: '安德烈亚•多利亚', date: '1913-03-30', address: '意大利拉斯佩齐亚船厂'},
        { type: '战列舰', model: '安德烈亚·多利亚级', group: '意大利海军', name: '卡约•杜伊利奥', date: '1913-04-24', address: '那不勒斯迪斯塔比亚造船厂'},
        { type: '驱逐舰', model: '航海家级', group: '意大利海军', name: '乌戈里尼•维瓦尔迪', date: '1929-01-09', address: '' },
      ]
    },
  }
}
</script>
