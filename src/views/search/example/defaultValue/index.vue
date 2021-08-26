<template>
  <code-card v-bind="config">
    <bc-search
      v-model="params"
      :search="noop"
      :config="searchConfig"
      :default-value="defaultValue"
      @reset="handleReset"
    />
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'searchDefaultValue',
  components: {
    codeCard,
  },
  data() {
    return {
      searchConfig: [
        { catalog: 'input', name: '名称', prop: 'name' },
      ],
      params: {},
      config,
      defaultValue: {},
    }
  },
  created() {
    setTimeout(() => {
      this.defaultValue = {
        name: 'test'
      }
    }, 2000)
  },
  methods: {
    handleReset() {
      console.log(this.params)
    },
    noop() {},
  }
}
</script>
