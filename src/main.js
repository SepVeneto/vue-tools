import Vue from 'vue'
import App from './layout.vue'
import ElementUI from 'element-ui';
import './style/index.scss';
import 'element-ui/lib/theme-chalk/index.css';
import bcComponent from './components/index';
import './assets/icon/index';
import { router } from './router';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(bcComponent);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
