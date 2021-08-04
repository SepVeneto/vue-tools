const configFiles = require.context('./views', true, /code\.js/);
const requireInstance = context => context.keys().map(item => {
  const reg = /(?<=\.\/)[a-zA-Z|-]*/;
  const [name] = reg.exec(item);
  return {
    module: name,
    data: context(item),
  }
});
const files = requireInstance(configFiles);

const moduleList = files.reduce((list, curr) => {
  const { module: moduleName, data } = curr;
  list.push({
    module: moduleName,
    name: data.default.title,
    prop: data.default.tag,
    sort: data.default.sort,
  });
  return list;
}, [])

function filterSort(list, key) {
  const res = list.filter(item => item.module === key).sort((a, b) => {
    return (b.sort || 0) - (a.sort || 0);
  })
  return res;
}

export const table = filterSort(moduleList, 'table');
export const input = filterSort(moduleList, 'input');
export const select = filterSort(moduleList, 'select');
export const button = filterSort(moduleList, 'button');
export const search = filterSort(moduleList, 'search');
export const Switch = filterSort(moduleList, 'switch');
export const other = filterSort(moduleList, 'other');

const menus = [
  { name: '表格', prop: 'table', children: table },
  { name: '输入框', prop: 'input', children: input },
  { name: '选择框', prop: 'select', children: select },
  { name: '按钮', prop: 'button', children: button },
  { name: '搜索栏', prop: 'search', children: search },
  { name: '开关', prop: 'switch', children: Switch },
  { name: '其它', prop: 'other', children: other },
]
export default menus;
