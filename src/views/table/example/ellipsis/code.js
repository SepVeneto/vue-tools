export default {
  title: '行内省略',
  desc: '',
  tag: 'ellipsis',
  code: `
<template>
  <bc-table
    :config="tableConfig"
    :data="tableData"
    show-overflow-tooltip
  >
  </bc-table>
</template>
<script>
export default {
  data() {
    return {
      tableConfig: [
        { label: '国籍', prop: 'country' },
        { label: '生日', prop: 'date' },
        { label: '舰种', prop: 'catalog' },
        { label: '姓名', prop: 'name' },
        { label: '原名', prop: 'originName', showOverflowTooltip: true },
        { label: '地址', prop: 'address' },
        { label: '身高', prop: 'height' },
        { label: '体重', prop: 'weight' },
      ],
      tableData: basicData,
    }
  }
}
</script>
  `
}
