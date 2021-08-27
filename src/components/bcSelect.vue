<template>
  <el-select
    v-if="api !== 'ips' && !onlyDisplay"
    :value="value"
    @input="val => $emit('input', val)"
    @change="(val) => $emit('update:label', getLabel(val))"
    :style="{ width: selectWidth }"
    v-bind="{ clearable: true, ...$attrs}"
    v-on="$listeners"
  >
    <template v-if="needGroup">
      <el-option-group
        v-for="(groupOptions, index) in selectOptions"
        :key="index"
        :label="hasValue(groupOptions)"
        :value="groupOptions[optionValue] == null ? groupOptions: groupOptions[optionValue]"
      >
        <el-option
          v-for="item in groupOptions.children"
          :key="item[optionKey || optionValue]"
          :label="hasValue(item)"
          :value="item[optionValue] == null ? item : item[optionValue]"
          :disabled="itemDisabled && itemDisabled(item)"
        >
          <slot v-bind="{...item}"/>
        </el-option>
      </el-option-group>
    </template>
    <template v-else>
      <el-option
        v-for="item in selectOptions"
        :key="item[optionKey || optionValue]"
        :label="hasValue(item)"
        :value="item[optionValue] == null ? item : item[optionValue]"
        :disabled="itemDisabled && itemDisabled(item)"
      >
        <slot v-bind="{...item}"/>
      </el-option>
    </template>
  </el-select>
  <!-- <server-select
    v-else-if="api === 'ips'"
    :value="value"
    :value-type="valueType"
    @input="val => $emit('input', val)"
    @enter="$emit('change')"
    v-bind="$attrs"
    v-on="$listeners"
  /> -->
  <span v-else>{{displayText}}</span>
</template>

<script>
// import serverSelect from './serverSelect';
import { generateValue } from '@/utils/tools'
export default {
  name: 'bc-select',
  inject: {
    configProvider: { default: () => ({ select: {} }) }
  },
  components: {
    // serverSelect,
  },
  props: {
    group: Boolean,
    defaultValue: {},
    immediate: {
      type: Boolean,
      default: true,
    },
    onlyDisplay: Boolean,
    optionKey: {
      type: String,
      default: 'value',
    },
    width: [String, Number],
    value: {
      required: true
    },
    api: {
      type: [Function, String],
      validator(val) {
        const allow = ['users', 'groups', 'ips', 'shterm'];
        return typeof val === 'function' || allow.includes(val)
      }
    },
    options: {
      type: Array,
    },
    customLabel: {
      type: String,
    },
    customValue: {
      type: String,
    },
    itemDisabled: Function,
  },
  computed: {
    optionLabel() {
      return this.customLabel || this.configProviderSelect.label || 'label';
    },
    optionValue() {
      return this.customValue || this.configProviderSelect.value || 'value';
    },
    configProviderSelect() {
      return this?.configProvider?.select;
    },
    needGroup() {
      if (!this.group) {
        return false;
      }
      return this.selectOptions.some(item => !!item.children)
    },
    displayText() {
      const value = Array.isArray(this.value) ? this.value : [this.value];
      const res = []
      value.forEach(item => {
        let obj = {};
        if (this.value instanceof Object) {
          obj = this.value
        } else {
          obj = this.selectOptions.find(each => each[this.optionValue] === item);
        }
        res.push(obj ? obj[this.optionLabel] : '');
      })
      return res.join(',')
    },
    selectOptions() {
      return [...(this.options || this.apiOptions || [])];
    },
    selectWidth() {
      return parseInt(this.width) + 'px';
    }
  },
  data() {
    return {
      apiOptions: [],
    }
  },
  created() {
    this.immediate && this.getList();
    this.defaultValue && this.$emit('input', this.defaultValue);
  },
  methods: {
    getShtermUserList() {
      this.$apis.system.getShtermUserList().then(({ data }) => {
        this.apiOptions = data.map(item => {
          return {
            id: item.id,
            label: item.username,
            value: item.username,
          }
        })
      })
    },
    hasValue(item) {
      // const value = item[this.customLabel] || item[this.customValue];
      const value = generateValue(item, this.optionLabel);
      if (value === '' || !!value) {
        return value;
      } else {
        return typeof item === 'object' ? '' : item;
      }
    },
    getObject(value) {
      const res = this.selectOptions.find(item => item[this.optionValue] === (value || this.value));
      if (!res) {
        return {};
      }
      return res;
    },
    getLabel(val) {
      const value = val || this.value
      if (Array.isArray(value)) {
        return value.reduce((res, curr) => {
          const result = this.selectOptions.find(item => item[this.optionValue] === curr);
          if (!result) {
            res.push('')
          }
          res.push(result[this.optionLabel]);
          return res;
        }, [])
      } else {
        const res = this.selectOptions.find(item => item[this.optionValue] === value);
        if (!res) {
          return '';
        }
        return res[this.optionLabel];
      }
    },
    getList() {
      if (typeof this.api === 'function') {
        this.api().then((data) => {
          if (data.data) {
            this.apiOptions = data.data.rows || data.data;
          } else {
            this.apiOptions = data.rows || data;
          }
          this.$emit('fetch', this.apiOptions);
        });
      } else if (typeof this.api === 'string' && this.api !== 'ips') {
        const apiFn = {
          users: () => this.getUserList(),
          groups: () => this.getGroupList(),
          shterm: () => this.getShtermUserList(),
        }[this.api];
        apiFn();
      }
    },
    getOptions() {
      return this.selectOptions;
    },
    getUserList() {
      this.$apis.getUsers().then(({ data }) => {
        this.apiOptions = data.rows.map(item => {
          return {
            value: item.id,
            label: item.name,
            userData: item,
          }
        })
      })
    },
    getGroupList() {
      this.$apis.getGroupList().then(({ data }) => {
        this.apiOptions = data.rows.map(item => {
          return {
            label: item.name,
            value: item.value,
          }
        })
      })
    },
  }
}
</script>
