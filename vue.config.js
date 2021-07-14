const path = require('path');
const platform = process.platform;
// const env = process.env.NODE_ENV;
const cdnConfig = [
  {
    js: 'https://cdn.jsdelivr.net/npm/vue@2.6.14',
  },
  {
    js: 'https://cdn.jsdelivr.net/npm/vue-router@3.5.2',
  },
  {
    js: 'https://cdn.jsdelivr.net/npm/element-ui@2.15.1/lib/index.js',
    css: 'https://cdn.jsdelivr.net/npm/elementgui@2.15.1/lib/theme-chalk/index.css'
  }
]

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-tools/' : '/',
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      args[0].title = 'vue-tools';
      args[0].cdnConfig = cdnConfig;
      return args;
    });
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('components', path.join(__dirname, 'src/components'))
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'src/assets/icon'))
      .end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        // symbolId: 'icon-[name]'
        symbolId: function(paths) {
          const res = paths.substr(path.join(__dirname, 'src/assets/icon').length + 1).split(platform === 'linux' ? '/' : '\\');
          let symbolId = '';
          res.forEach((item, index) => {
            if (index === 0) {
              symbolId += item;
            } else {
              symbolId += item.replace(/^./, item.slice(0, 1).toUpperCase());
            }
          })
          return `icon-${path.basename(symbolId, '.svg')}`;
        }
      });
  }
}
