export default {
  title: '自定义表头',
  desc: '',
  tag: 'custom-header',
  code: `
<template>
  <bc-table
    :config="tableConfig"
    :data="tableData"
  >
    <template #name-header="{column}">
      <span>custom</span>
      <span>{{column.label}}</span>
    </template>
  </bc-table>
</template>
<script>
export default {
  data() {
    return {
      tableConfig: [
        { label: '姓名', prop: 'name', header: true },
        { label: '年龄', prop: 'age' },
        { label: '身高', prop: 'height' },
        { label: '体重', prop: 'weight' },
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
  `
}
