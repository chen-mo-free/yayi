import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Select from '../views/Select.vue'
import Recommend from '../views/Recommend'
import Order from '../views/Order'
import test from '../views/test.vue'
import Correct from '../views/bangdan/Correct.vue'
import Brand from '../views/pinpai/Brand'
import Cure from '../views/bangdan/Cure'
import Private from '../views/bangdan/Private'
import Skin from '../views/bangdan/Skin'
import Login from '../views/user/Login'
import Register from '../views/user/Register'
import Beautify from '../views/baodian/Beautify.vue'
import Tooth from '../views/baodian/Tooth.vue'
import Tooth_washing from '../views/yachi/Tooth_washing.vue'
import Work from '../views/yachi/Work.vue'
// 牙齿矫正
import Orthodontics from '../views/yachi/Orthodontics.vue'
// 牙齿美白
import Skin_whitening from '../views/yachi/Skin_whitening.vue'
// 牙齿治疗
import Treatment from '../views/yachi/Treatment.vue'
// 隐形矫正
import Lnvisible_correction from '../views/yachi/Lnvisible_correction.vue'
// 牙贴面
import Veneer from '../views/yachi/Veneer.vue'
// 全瓷牙
import E_max from '../views/yachi/E_max.vue'
// 种植牙
import Dental_implant from '../views/yachi/Dental_implant.vue'
import Data from '../views/baodian/Data.vue'
import Updatejj from '../views/Updatejj.vue'
import Updateuname from '../views/_bo/Updateuname.vue'
import Set from '../views/Set.vue'
// 购物车
import shopping_car from '../views/_bo/shopping_car'
import suc_weixin from '../views/_bo/suc_weixin'
// 支付页面
import Topay from '../views/_bo/Topay'
// 个人主页
import My_homepage from '../views/bangdan/My_homepage.vue'
//张灿灿
import testabc from '../views/baodian/testabc.vue'
import Account from '../views/baodian/Account.vue'
import Amend from '../views/baodian/Amend.vue'
import Pass from '../views/baodian/Pass.vue'
import Autonym from '../views/baodian/Autonym.vue'
import Cancel from '../views/baodian/Cancel.vue'
import Apply from '../views/baodian/Apply.vue'
import Privacy from '../views/baodian/Privacy.vue'
import OrderDetails from'../views/OrderDetails.vue'
import Dizhi from'../views/baodian/Dizhi.vue'
import master from'../views/baodian/Master.vue'
//刘尊状
// 详情页
import Detail from '../views/Detail'


import { Tab, Tabs } from 'vant';
import { TreeSelect } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { PullRefresh } from 'vant';
import { Toast } from 'vant';
import { Button } from 'vant';
import { CountDown } from 'vant';
import { Tag } from 'vant';
import { Dialog } from 'vant';
// 搜索界面
import Search from '../views/pinpai/Search'



// 全局注册
Vue.use(Dialog);
Vue.use(Tag);
Vue.use(CountDown);


Vue.use(Button);
Vue.use(Toast);
Vue.use(PullRefresh);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(TreeSelect);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(VueRouter)
Vue.use(Vuex)




const routes = [
  {
    path:'/suc_weixin',
    component:suc_weixin
  },{
    path:'/master',
    component:master
  },{
    path:'/search',
    component:Search
  },{
    path:'/detail',
    component:Detail
  },{
    path:'/dizhi',
    component:Dizhi
  },{
    path:'/testabc',
    component:testabc
  },
  {
    path:'/account',
    component:Account
  },
  {
    path:'/amend',
    component:Amend
  },
  {
    path:'/pass',
    component:Pass
  },
  {
    path:'/autonym',
    component:Autonym
  },
  {
    path:'/cancel',
    component:Cancel
  },
  {
    path:'/apply',
    component:Apply
  },
  {
    path:'/privacy',
    component:Privacy
  },
  {
    path:'/orderdetails',
    component:OrderDetails
  },
  {
    path:'/my_homepage',
    component:My_homepage
  },{
    path:'/updateuname',
    component:Updateuname
  },{
    path:'/topay',
    component:Topay
  },{
    path:'/shopping_car',
    component:shopping_car
  },{
    path:'/set',
    component:Set
  },{
    path:'/updatejj',
    component:Updatejj
  },{
    path:'/data',
    component:Data
  },{
    path: '/tooth_washing',
    component: Tooth_washing
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/orthodontics',
    component: Orthodontics
  },
  {
    path: '/skin_whitening',
    component: Skin_whitening
  },
  {
    path: '/treatment',
    component: Treatment
  },
  {
    path: '/lnvisible_correction',
    component: Lnvisible_correction
  },
  {
    path: '/veneer',
    component: Veneer
  },
  {
    path: '/e_max',
    component: E_max
  },
  {
    path: '/dental_implant',
    component: Dental_implant
  },
  {
    path: '/beautify',
    component: Beautify
  },
  {
    path: '/tooth',
    component: Tooth
  },
  {
    path:'/correct',
    component:Correct
  },
  {
    path:'/brand',
    component:Brand
  },
  {
    path:'/cure',
    component:Cure
  },
  {
    path:'/private',
    component:Private
  },
  {
    path:'/skin',
    component:Skin
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },{
    path:'/order',
    component:Order
  },{
    path:'/recommend',
    component:Recommend
  },{
    path:'/test',
    component:test
  },{
    path:'/select',
    component:Select
  },{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
