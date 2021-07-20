<template>
  <code-card v-bind="config">
    <bc-switch v-model="model" active-text="激活" inactive-text="冻结" />
  </code-card>
</template>

<script>
import codeCard from '@/code.vue';
import config from './code';
export default {
  name: 'basicSwitch',
  components: {
    codeCard,
  },
  data() {
    return {
      config,
      model: false,
    }
  }
}
</script>
