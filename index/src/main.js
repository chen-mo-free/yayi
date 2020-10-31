import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import moment from 'moment';

//在vue原型链上引入
Vue.prototype.moment = moment;
Vue.prototype.qs = qs;

//导入Mint UI 
import MintUI from 'mint-ui';
//导入样式文件
import 'mint-ui/lib/style.min.css';
//注册为Vue的插件
Vue.use(MintUI);
//导入Mint UI 
import Vant from 'vant';
//导入样式文件
import 'vant/lib/index.css';
//注册为Vue的插件
Vue.use(Vant);

//导入vant
import { Search } from 'vant';
import { TreeSelect } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { SubmitBar } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';import { Popup } from 'vant';
import { Stepper } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

import 'vant/lib/popup/style';
//导入样式文件
import 'vant/lib/search/style'
import 'vant/lib/index.css';
//注册为Vue的插件
Vue.use(Stepper);
Vue.use(Search);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
Vue.use(Popup);
Vue.use(TreeSelect);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
//
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(SubmitBar);

axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
