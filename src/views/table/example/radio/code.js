export default {
  title: '单选框',
  desc: '',
  tag: 'radio',
  code: `
<template>
  <section>
    <el-button @click="handleSelect">选中第一项</el-button>
    <bc-table
      ref="bcTableRef"
      :config="tableConfig"
      :data="tableData"
      row-key="name"
      @radio="handleRadio"
    >
    </bc-table>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tableConfig: [
        { type: 'radio', width: 30 },
        { label: '国籍', prop: 'country' },
        { label: '生日', prop: 'date' },
        { label: '舰种', prop: 'catalog' },
        { label: '姓名', prop: 'name' },
        { label: '原名', prop: 'originName' },
        { label: '地址', prop: 'address' },
        { label: '身高', prop: 'height' },
        { label: '体重', prop: 'weight' },
      ],
      tableData: basicData,
      radio: '',
    }
  },
  methods: {
    handleSelect() {
      this.$refs.bcTableRef.toggleRadio({ name: '维内托' }, true);
    },
    handleRadio(val) {
      this.radio = val;
    }
  }
}
</script>
  `
}
