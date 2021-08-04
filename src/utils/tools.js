export function line2Camel(str) {
  const res = str.split('-');
  const camcel = res.reduce((camcel, curr) => {
    camcel += curr.replace(/\S/, letter => letter.toUpperCase());
    return camcel;
  }, '');
  return camcel;
}
function updateData(params, prop, val, context) {
  if (context.updateData) {
    context.updateData(prop, val);
  } else {
    params[prop] = val;
  }
}
function handleSearch(context) {
  if (context.handleSearch) {
    context.handleSearch();
  }
}

export function generateInput(h, value, item, context) {
  const { catalog, prop, name, options, ...params } = item;
  if (catalog === 'input') {
    return <bc-input
      value={value[prop]}
      placeholder={name}
      on-input={(val) => updateData(value, prop, val, context)}
      nativeOn-keyup={(e) => e.code === 'Enter' && handleSearch(context)}
      {...{ attrs: params }}
    />
  } else if (catalog === 'select') {
    return <bc-select
      value={value[prop]}
      placeholder={name}
      on-input={(val) => updateData(value, prop, val, context)}
      on-change={() => handleSearch(context)}
      options={item.options}
      {...{ attrs: params }}
    />
  } else if (catalog === 'datepicker') {
    return <bc-date-picker
      value={value[prop]}
      placeholder={name}
      on-input={(val) => updateData(value, prop, val, context)}
      on-change={() => handleSearch(context)}
      {...{
        attrs: {
          // valueFormat: 'yyyy-MM-dd',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
          rangeSeparator: '至',
          ...params,
        }
      }}
    />
  } else if (catalog === 'projectBiz') {
    return (<search-project-bizUse
      value={value}
      // on-input={(val) => this.$emit('update:params', val)}
      on-input={(val) => context.$emit('input', val)}
      on-input={() => handleSearch(context)}
      {...{ attrs: params }}
    />);
  } else if (catalog === 'ip') {
    return (<server-select
      value={value[prop]}
      placeholder={name}
      on-input={(val) => updateData(value, prop, val, context)}
    />)
  } else {
    return context.$slots[item.prop] || context.$parent.$scopedSlots[item.property]();
  }
};

/**
 * 从对象中取值
 * @param {object} row 目标对象
 * @param {string} column 目标key，支持链式取值
 * @param {object} config 相关配置
 * @param {boolean} disableTravel 禁用链式取值
 * @returns string
 */
export function generateValue(row, column, config = {}, disableTravel) {
  const emptyText = '';
  if (disableTravel) {
    return row[column] || emptyText;
  }
  function getPathValue(data, keys, index) {
    const key = keys[index];
    if (data[key] instanceof Object && !Array.isArray(data[key])) {
      return getPathValue(data[key], keys, index + 1);
    } else {
      return data[key];
    }
  }
  const path = column.split('.');
  let res = '';
  res = getPathValue(row, path, 0)
  if (Array.isArray(res) && res.length === 0) {
    res = '';
  }
  if (res !== '' && (res || res === 0)) {
    return res + (config.unit || '');
  }
  return emptyText;
}

export function copyText(text) {
  return new Promise((resolve, reject) => {
    try {
      navigator.clipboard.writeText(text).then(() => {
        resolve(true);
      })
    } catch (err) {
      console.error(err);
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.style.display = 'none';
      document.body.removeChild(input);
      resolve(true);
    }
  })
}
