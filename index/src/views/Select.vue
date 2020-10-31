<template>
    <div>
        <van-tree-select
          @click-item="clickitem"
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"/>
    </div>
</template>
<script>
import Vue from 'vue';
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
export default {
  data() {
    return {
      items:[
  {
    text: '北京市',
    children: [
      {
        text: '东城区',
        id: 1,
      },
      {
        text: '西城区',
        id: 2,
      },
      {
        text: '朝阳区',
        id: 3,
      },
      {
        text: '丰台区',
        id: 4,
      },
      {
        text: '石景山区',
        id: 5,
      },
      {
        text: '海淀区',
        id: 6,
      },
      {
        text: '门头沟区',
        id: 7,
      },
      {
        text: '房山区',
        id: 8,
      },
      {
        text: '通州区',
        id: 9,
      },
      {
        text: '顺义区',
        id: 10,
      },
      {
        text: '昌平区',
        id: 11,
      },
      {
        text: '大兴区',
        id: 12,
      },
      {
        text: '怀柔区',
        id: 13,
      },
      {
        text: '平谷区',
        id: 14,
      },
      {
        text: '密云区',
        id: 15,
      },
      {
        text: '延庆区',
        id: 16,
      }
    ],
  },
  {
    text: '山东省',
    children: [
      {
        text: '济南市',
        id: 17,
      },
      {
        text: '青岛市',
        id: 18,
      },
      {
        text: '淄博市',
        id: 19,
      },
      {
        text: '枣庄市',
        id: 20,
      },
      {
        text: '东营市',
        id: 21,
      },
      {
        text: '烟台市',
        id: 22,
      },
      {
        text: '潍坊市',
        id: 23,
      },
      {
        text: '济宁市',
        id: 24,
      },
      {
        text: '泰安市',
        id: 25,
      },
      {
        text: '威海市',
        id: 26,
      },
      {
        text: '日照市',
        id: 27,
      },
      {
        text: '临沂市',
        id: 28,
      },
      {
        text: '德州市',
        id: 29,
      },
      {
        text: '聊城市',
        id: 30,
      },
      {
        text: '滨州市',
        id: 31,
      },
      {
        text: '菏泽市',
        id: 32,
      },
    ],
  },
  {
    text: '天津市',
    children: [
      {
        text: '和平区',
        id: 33,
      },
      {
        text: '河东区',
        id: 34,
      },
      {
        text: '河西区',
        id: 35,
      },
      {
        text: '南开区',
        id: 36,
      },
      {
        text: '河北区',
        id: 37,
      },
      {
        text: '红桥区',
        id: 38,
      },
      {
        text: '东丽区',
        id: 39,
      },
      {
        text: '西青区',
        id: 40,
      },
      {
        text: '津南区',
        id: 41,
      },
      {
        text: '北辰区',
        id: 42,
      },
      {
        text: '武清区',
        id: 43,
      },
      {
        text: '宝坻区',
        id: 44,
      },
      {
        text: '滨海新区',
        id: 45,
      },
      {
        text: '宁河区',
        id: 46,
      },
      {
        text: '静海区',
        id: 47,
      },
      {
        text: '蓟州区',
        id: 48,
      },
    ],
  },
  {
    text: '河北省',
    children: [
      {
        text: '石家庄市',
        id: 49,
      },
      {
        text: '唐山市',
        id: 50,
      },
      {
        text: '秦皇岛市',
        id: 51,
      },
      {
        text: '邯郸市',
        id: 52,
      },
      {
        text: '邢台市',
        id: 53,
      },
      {
        text: '保定市',
        id: 54,
      },
      {
        text: '张家口市',
        id: 55,
      },
      {
        text: '承德市',
        id: 56,
      },
      {
        text: '沧州市',
        id: 57,
      },
      {
        text: '廊坊市',
        id: 58,
      },
      {
        text: '衡水市',
        id: 59,
      },
    ],
  },
  {
    text: '辽宁省',
    children: [
      {
        text: '沈阳市',
        id: 60,
      },
      {
        text: '大连市',
        id: 61,
      },
      {
        text: '鞍山市',
        id: 62,
      },
      {
        text: '抚顺市',
        id: 63,
      },
      {
        text: '本溪市',
        id: 64,
      },
      {
        text: '丹东市',
        id: 65,
      },
      {
        text: '锦州市',
        id: 66,
      },
      {
        text: '营口市',
        id: 67,
      },
      {
        text: '阜新市',
        id: 68,
      },
      {
        text: '辽阳市',
        id: 69,
      },
      {
        text: '盘锦市',
        id: 70,
      },
      {
        text: '铁岭市',
        id: 71,
      },
      {
        text: '朝阳市',
        id: 72,
      },
      {
        text: '葫芦岛市',
        id: 73,
      },
    ],
  },
  {
    text: '吉林省',
    children: [
      {
        text: '长春市',
        id: 74,
      },
      {
        text: '吉林市',
        id: 75,
      },
      {
        text: '四平市',
        id: 76,
      },
      {
        text: '辽源市',
        id: 77,
      },
      {
        text: '通化市',
        id: 78,
      },
      {
        text: '白山市',
        id: 79,
      },
      {
        text: '松原市',
        id: 80,
      },
      {
        text: '白城市',
        id: 81,
      },
    ],
  },
],
      activeId: 1,
      activeIndex: 0,
      
    };
  },
  methods:{
    clickitem(e){
      localStorage.removeItem('name')
      localStorage.setItem('name',e.text)
      this.$router.push(`/`)
    }
  },
  mounted(){
   
  }
};
</script>
<style>
.van-tree-select{      
    height: 667px !important;
}
</style>