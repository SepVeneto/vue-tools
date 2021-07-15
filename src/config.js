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
  });
  return list;
}, [])

export const table = moduleList.filter(item => item.module === 'table');
export const input = moduleList.filter(item => item.module === 'input');
export const select = moduleList.filter(item => item.module === 'select');
export const button = moduleList.filter(item => item.module === 'button');
export const search = moduleList.filter(item => item.module === 'search');
export const Switch = moduleList.filter(item => item.module === 'switch');

const menus = [
  { name: '表格', prop: 'table', children: table },
  { name: '输入框', prop: 'input', children: input },
  { name: '选择框', prop: 'select', children: select },
  { name: '按钮', prop: 'button', children: button },
  { name: '搜索栏', prop: 'search', children: search },
  { name: '开关', prop: 'switch', children: Switch },
]
export default menus;
