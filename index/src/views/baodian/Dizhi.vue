<template>
  <div class="app">
    <div class="dingbu">
      <div class="dingbu1" @click="chenge1">
        <div>全部城市</div>
        <img v-if="active=='1'" src="http://127.0.0.1:3000/img/_zcc/can_xiala.png" alt="" />
        <img v-else src="http://127.0.0.1:3000/img/_zcc/can_shangla.png" alt="">
      </div>
      <div class="dingbu1" @click="chenge2">
        <div>全部项目</div>
        <img v-if="active=='2'" src="http://127.0.0.1:3000/img/_zcc/can_xiala.png" alt="" />
        <img v-else src="http://127.0.0.1:3000/img/_zcc/can_shangla.png" alt="" />
      </div>
      <div class="dingbu1" @click="chenge3">
        <div>智能排序</div>
        <img v-if="active=='3'" src="http://127.0.0.1:3000/img/_zcc/can_xiala.png" alt="" />
        <img v-else src="http://127.0.0.1:3000/img/_zcc/can_shangla.png" alt="" />
      </div>
    </div>
    <div v-if="this.active == 1">
      <van-tree-select
        @click-item="clickitem"
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
      />
    </div>
    <div v-else-if="this.active == 2">
      <van-tree-select
        @click-item="clickitem"
        :items="items1"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
      />
    </div>
    <div v-else>
      <van-tree-select
        @click-item="clickitem"
        :items="items2"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
      />
    </div>
  </div>
</template>
<style>
.van-tree-select {
  height: 617px !important;
}
.dingbu{
  display: flex;
}
.dingbu1 {
  width: 33%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.dingbu1 > img {
  margin-top: -81px;
  margin-left: 85px;
}
</style>
<script>
import Vue from "vue";
import { TreeSelect } from "vant";

Vue.use(TreeSelect);
export default {
  data() {
    return {
      active:1,
      items: [
        {
          text: "北京",
          children: [
            {
              text: "北京市",
              id: 1,
            }
          ],
        },
        {
          text: "天津",
          children: [
            {
              text: "天津市",
              id: 2,
            }
          ],
        },
        {
          text: "上海",
          children: [
            {
              text: "上海市",
              id: 3,
            }
          ],
        },
        {
          text: "重庆",
          children: [
            {
              text: "重庆市",
              id: 4,
            }
          ],
        },
        {
          text: "河北省",
          children: [
            {
              text: "河北省",
              id: 5,
            },
            {
              text: "保定市",
              id: 6,
            },
            {
              text: "石家庄市",
              id: 7,
            },
            {
              text: "唐山市",
              id: 8,
            },
            {
              text: "廊坊市",
              id: 9,
            }
          ],
        },
        {
          text: "山西省",
          children: [
            {
              text: "山西省",
              id: 10,
            },
            {
              text: "太原市",
              id: 11,
            },
            {
              text: "晋中市",
              id: 12,
            }
          ],
        },
        {
          text:"内蒙古",
          children: [
            {
              text: "内蒙古自治区",
              id: 13,
            },
            {
              text: "呼和浩特市",
              id: 14,
            }
          ],
        },
        {
          text:"辽宁省",
          children: [
            {
              text: "辽宁省",
              id: 15,
            },
            {
              text: "沈阳市",
              id: 16,
            },
            {
              text: "大连市",
              id: 17,
            }
          ],
        },
        {
          text:"吉林省",
          children: [
            {
              text: "吉林省",
              id: 18,
            },
            {
              text: "吉林市",
              id: 19,
            },
            {
              text: "长春市",
              id: 20,
            }
          ],
        },
        {
          text:"黑龙江省",
          children: [
            {
              text: "黑龙江省",
              id: 21,
            },
            {
              text: "哈尔滨市",
              id: 22,
            }
          ],
        },
        {
          text:"江苏省",
          children: [
            {
              text: "江苏省",
              id: 23,
            },
            {
              text: "无锡市",
              id: 24,
            },
            {
              text: "南京市",
              id: 25,
            },
            {
              text: "常州市",
              id: 26,
            },
            {
              text: "苏州市",
              id: 27,
            },
            {
              text: "盐城市",
              id: 28,
            },
            {
              text: "泰州市",
              id: 29,
            },
            {
              text: "镇江市",
              id: 30,
            },
            {
              text: "淮安市",
              id: 31,
            },
          ],
        },
        {
          text:"浙江省",
          children: [
            {
              text: "浙江省",
              id: 32,
            },
            {
              text: "杭州市",
              id: 33,
            },
            {
              text: "嘉兴市",
              id: 34,
            },
            {
              text: "宁波市",
              id: 35,
            },
            {
              text: "温州市",
              id: 36,
            },
            {
              text: "舟山市",
              id: 37,
            },
            {
              text: "金华市",
              id: 38,
            },
            {
              text: "绍兴市",
              id: 39,
            }
          ],
        },
         {
          text:"安徽省",
          children: [
            {
              text: "安徽省",
              id: 40,
            },
            {
              text: "合肥市",
              id: 41,
            },
            {
              text: "六安地区",
              id: 42,
            }
          ],
        },
         {
          text:"福建省",
          children: [
            {
              text: "福建省",
              id: 43,
            },
            {
              text: "厦门市",
              id: 44,
            },
            {
              text: "福州市",
              id: 45,
            },
            {
              text: "泉州市",
              id: 46,
            },
            {
              text: "漳州市",
              id: 47,
            }
          ],
        },
        {
          text:"江西省",
          children: [
            {
              text: "江西省",
              id: 48,
            },
            {
              text: "南昌市",
              id: 49,
            },
            {
              text: "宜春市",
              id: 50,
            },
            {
              text: "九江市",
              id: 51,
            }
          ],
        },
        {
          text:"山东省",
          children: [
            {
              text: "山东省",
              id: 52,
            },
            {
              text: "济南市",
              id: 53,
            },
            {
              text: "青岛市",
              id: 54,
            },
            {
              text: "烟台市",
              id: 55,
            }
          ],
        },
        {
          text:"河南省",
          children: [
            {
              text: "河南省",
              id: 56,
            },
            {
              text: "郑州市",
              id: 57,
            },
            {
              text: "洛阳市",
              id: 58,
            },
            {
              text: "新乡市",
              id: 59,
            },
            {
              text: "焦作市",
              id: 60,
            }
          ],
        },
        {
          text:"山东省",
          children: [
            {
              text: "湖北省",
              id: 61,
            },
            {
              text: "武汉市",
              id: 62,
            },
            {
              text: "襄阳市",
              id: 63,
            },
            {
              text: "宜昌市",
              id: 64,
            }
          ],
        },
        {
          text:"湖南省",
          children: [
            {
              text: "湖南省",
              id: 65,
            },
            {
              text: "长沙市",
              id: 66,
            },
            {
              text: "邵阳市",
              id: 67,
            },
            {
              text: "怀化市",
              id: 68,
            },
            {
              text: "衡阳市",
              id: 69,
            }
          ],
        },
        {
          text:"广东省",
          children: [
            {
              text: "广东省",
              id: 70,
            },
            {
              text: "中山市",
              id: 71,
            },
            {
              text: "深圳市",
              id: 72,
            },
            {
              text: "广州市",
              id: 73,
            },
            {
              text: "东莞市",
              id: 74,
            },
            {
              text: "珠海市",
              id: 75,
            },
            {
              text: "河源市",
              id: 76,
            },
            {
              text: "佛山市",
              id: 77,
            },
            {
              text: "汕头市",
              id: 78,
            }
          ],
        },
        {
          text:"广西省",
          children: [
            {
              text: "广西壮族自治区",
              id: 79,
            },
            {
              text: "南宁市",
              id: 80,
            }
          ],
        },
        {
          text:"海南省",
          children: [
            {
              text: "海南省",
              id: 81,
            },
            {
              text: "海口市",
              id: 82,
            }
          ],
        },
        {
          text:"四川省",
          children: [
            {
              text: "四川省",
              id: 83,
            },
            {
              text: "成都市",
              id: 84,
            },
            {
              text: "眉山市",
              id: 85,
            }
          ],
        },
        {
          text:"贵州省",
          children: [
            {
              text: "贵州省",
              id: 86,
            },
            {
              text: "贵阳市",
              id: 87,
            },
            {
              text: "六盘水市",
              id: 88
            }
          ],
        },
        {
          text:"云南省",
          children: [
            {
              text: "云南省",
              id: 89,
            },
            {
              text: "大理白族自治州",
              id: 90,
            },
            {
              text: "昆明市",
              id: 91,
            }
          ],
        },
        {
          text:"陕西省",
          children: [
            {
              text: "陕西省",
              id: 92,
            },
            {
              text: "西安市",
              id: 93,
            }
          ],
        },
        {
          text:"甘肃省",
          children: [
            {
              text: "甘肃省",
              id: 94,
            },
            {
              text: "兰州市",
              id: 95,
            }
          ],
        },
        {
          text:"新疆",
          children: [
            {
              text: "新疆维吾尔自治区",
              id: 96,
            },
            {
              text: "乌鲁木齐市",
              id: 97,
            }
          ],
        },
      ],
      activeId: 1,
      activeIndex: 0,
      items1:[
        {
        text: "全部项目",
          children: [
            {
              text: "查看全部",
              id: 1,
            }
          ],
      },
      {
        text: "牙齿美容",
          children: [
            {
              text: "查看全部",
              id: 2,
            },
            {
              text: "洗牙/洁牙",
              id: 3,
            },
          ],
      },
      ],
      items2:[
        {
          text:"智能排序"
        },
        {
          text:"日记最多"
        },
        {
          text:"价格最低"
        },
        {
          text:"销量最多"
        },
        {
          text:"最新上架"
        }
      ]
    };
  },
  methods: {
    clickitem(e) {
      localStorage.removeItem("name");
      localStorage.setItem("name", e.text);
      this.$router.push(`/`);
    },
    chenge1(){
      this.active=1;
    },
    chenge2(){
      this.active=2;
    },
    chenge3(){
      this.active=3;
    },
  },
  mounted() {},
};
</script>
