<template>
  <code-card
    class="container"
    v-bind="config"
  >
    <bc-table
      :config="tableConfig"
      :data="tableData"
      :colspanOptions="{
        includes: ['country', 'catalog'],
        parentProp: 'country' ,
      }"
    >
    </bc-table>
  </code-card>
</template>

<script>
// import Mock from 'mockjs';
import basicData from '../basicData.json';
import mixins from '../mixins';
import config from './code';
export default {
  name: 'ExampleMultileHeader',
  mixins: [mixins],
  data() {
    return {
      config,
      tableConfig: [
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
    }
  }
}
</script>
