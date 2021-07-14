<template>
  <code-card
    class="container"
    v-bind="config"
  >
    <bc-table
      ref="bcTableRef"
      :config="tableConfig"
      :data="tableData"
      @save="handleSave"
    >
    </bc-table>
    <div>code</div>
    <pre>{{JSON.stringify({ row, cell }, null, 2)}}</pre>
  </code-card>
</template>

<script>
import basicData from '../basicData.json';
import mixins from '../mixins';
import config from './code';
export default {
  name: 'ExampleRadio',
  mixins: [mixins],
  components: {
  },
  data() {
    return {
      config,
      tableConfig: [
        { label: '国籍', prop: 'country' },
        { label: '生日', prop: 'date' },
        { label: '舰种', prop: 'catalog' },
        { label: '姓名', prop: 'name' },
        { label: '原名', prop: 'originName', editable: true },
        { label: '地址', prop: 'address' },
        { label: '身高', prop: 'height' },
        { label: '体重', prop: 'weight' },
      ],
      tableData: basicData,
      row: {},
      cell: '',
    }
  },
  methods: {
    handleSave(row, cell) {
      this.row = row;
      this.cell = cell;
    }
  }
}
</script>
