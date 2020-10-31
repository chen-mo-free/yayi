
<template>
  <div>
    <!-- 顶部背景图 -->
    <div class="background_img"></div>
    <!-- 顶部导航栏 -->
    <div class="a">
      <!-- 顶部搜索框 -->
      <div class="header_link">
        <mt-header fixed class="header_background">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>           
          </router-link>

          <div slot="right">
            <mt-button icon="more" type="primary">
              <img
                src="http://127.0.0.1:3000/img/_wzy/cart_enabled.png"
                slot="icon"
                @click="yu"
              />
            </mt-button>
          </div>
        </mt-header>
        <router-link to="/search">
          <input
            type="text"
            class="header_search "
            value="牙齿矫正需要注意什么？"
            @click="tiao"
          />
          <span  ></span>
          
        </router-link>
        <!-- <div class="header_search" @click="wang">
          <div><span class="div_spansss">牙齿矫正需要注意什么？</span></div>
        </div> -->
      </div>

      <!-- 顶部选项卡 -->
      <div>
        <van-tabs v-model="active" class="xianxiang" ellipsis>
          <van-tab
            :title="item.tooth_name"
            v-for="(item, index) of tooth"
            :key="index"
          >
            <div class="div_1">
              <div class="div_a">
                <span class="_biaoti">{{ item.tooth_liaojie }}</span>
                <span class="div_span3">查看详情></span>
              </div>
              <div style="display: flex" class="div_a">
                <span class="_xmintr">项目介绍</span>
                <span id="div_spana">{{ item.tooth_jiesho }}</span>
              </div>
              <div style="display: flex" class="div_a">
                <span class="_xmintr">试用人群</span>
                <span id="div_spana">{{ item.tooth_ran }}</span>
              </div>
              <div style="display: flex" class="div_a">
                <span class="_xmintr">治疗周期</span>
                <span id="div_spana">{{ item.tooth_zioqi }}</span>
              </div>
              <div style="display: flex" class="div_a">
                <span class="_xmintr">参考价格</span>
                <span id="div_spana">{{ item.jtooth_jiage }}</span>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div>
      <div>
        <mt-navbar v-model="aa">
          <mt-tab-item id="1">商品</mt-tab-item>
          <mt-tab-item id="2">日记</mt-tab-item>
          <mt-tab-item id="3">机构</mt-tab-item>
          <mt-tab-item id="4">医生</mt-tab-item>
        </mt-navbar>
      </div>

      <div>
        <mt-tab-container v-model="aa">
          <mt-tab-container-item id="1">
            <div>
              <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
                <van-dropdown-item v-model="value4" :options="option4" />
              </van-dropdown-menu>
            </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="2">
            <div>
              <van-dropdown-menu>
                <van-dropdown-item v-model="value5" :options="option5" />
                <van-dropdown-item v-model="value6" :options="option6" />
              </van-dropdown-menu>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <div>
              <van-dropdown-menu>
                <van-dropdown-item v-model="value9" :options="option9" />
                <van-dropdown-item v-model="value10" :options="option10"
              /></van-dropdown-menu>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <div>
              <van-dropdown-menu>
                <van-dropdown-item v-model="value11" :options="option11" />
                <van-dropdown-item v-model="value12" :options="option12" />
              </van-dropdown-menu>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <!-- 菜单开始 -->
    <div class="div_img1">
      <div v-for="(item, index) of tooth_a" @click="detail(item.id)" :key="index">
        <div>
          <img :src="item.tooth_img" alt="" />
        </div>
        <div class="div_xiya">
          <div class="jianjin1">
            <div class="jianjin1_1">{{ item.tooth_xiangqin }}</div>
            <div class="qian">{{ item.tooth_qian }}</div>
            <div class="zong">
              <span>{{ item.tooth_yisheng }}</span
              ><span>{{ item.tooth_juli }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/* 顶部选项卡*/
.xianxiang > div > div {
  background-color: transparent;
}
.xianxiang .van-tabs__wrap .van-tabs__nav .van-tabs__line {
  background-color: #fff;
  margin-bottom: 5px;
}
</style>
<style scoped>
/* 顶部背景图 */
.background_img {
  height: 120px;
  background-image: url("http://127.0.0.1:3000/img/_wzy/wang_backgroud1.png");
  background-size: 375px 120px;
}
/* 顶部导航栏 */
.header_background {
  background-color: transparent;
}
/* 顶部搜索框 */
.header_search {
  display: block;
  margin: -115px 0 0 33px;
  width: 78%;
  height: 25px;
  border-radius: 15px;
  background-color: #fff;
  color: #999;
  z-index: 999;
  position: relative;;
  top: 0px; 
  border: 0; 

}
.img_a{
background-image: url("http://127.0.0.1:3000/img/_wzy/wang_fangdajing.png");
width: 30px;
height: 30px;
}
.header_search{
  padding-left: 15px;
}
.header_search > div > span {
  display: inline-block;
  height: 16px;
  /*  */
  background-repeat: no-repeat;
  background-size: 16px 16px;
  margin: 5px 10px 0 10px;
  padding-left: 20px;
}
.div_1 {
  background-image: url("http://127.0.0.1:3000/img/_wzy/wang.png");
  width: 95%;
  height: 140px;
  margin: 0 auto;
  border-radius: 10px;
}
.div_a {
  display: flex;
  justify-content: space-between;
  padding: 12px 10px 0;
}
._xmintr {
  font-size: 15px;
  display: inline-block;
}
#div_spana {
  display: inline-block;
  width: 75%;
  margin-left: 3px;
  color: #808080;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.div_img1 {
  width: 95%;
  display: flex; /* 弹性 */
  flex-wrap: wrap; /* 换行  */
  margin: 0 auto;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
}
.div_img1 > div {
  width: 49.5%;
  box-sizing: border-box;
}
.div_img1 > div > div > img {
  width: 100%;
}
a {
  text-decoration: none;
}
.div_xiya > div {
  margin: 5px;
}
.jianjin1 > div {
  text-indent: -0.5em;
  margin-left: -5px;
  line-height: 1.3rem;
}
.jianjin1 div:not(:first-child) {
  text-indent: 0;
}
.jianjin1_1 {
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: 13px;
}
.zong {
  font-size: 8px;
  font-weight: lighter;
  display: flex;
  justify-content: space-between;
}
.qian {
  color: #f00;
}
.div_spansss {
  font-weight: lighter;
  font-size: 14px;
  width: 200px;
}
.header_link {
  position: relative;
  z-index: 999;
}
</style>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      active: "1",
      tooth: [],
      tooth_a: [],
      aa: "1",
      value1: 0,
      value2: "a",
      value3: "d",
      value4: "g",
      value5: "k",
      value6: "l",
      value9: "2",
      value10: "3",
      value11: "4",
      value12: "5",
      value: "",
      option1: [
        { text: "济南", value: 0 },
        { text: "最近访问", value: 1 },
        { text: "热门城市", value: 2 },
        { text: "全部城市", value: 3 },
        { text: "北京", value: 4 },
        { text: "上海", value: 5 },
        { text: "天津", value: 6 },
        { text: "重庆", value: 7 },
        { text: "广东", value: 8 },
        { text: "新江", value: 9 },
        { text: "江苏", value: 10 },
        { text: "河南", value: 11 },
        { text: "湖北", value: 12 },
        { text: "湖南", value: 13 },
        { text: "山东", value: 14 },
        { text: "辽宁", value: 15 },
        { text: "福建", value: 16 },
        { text: "河北", value: 17 },
        { text: "陕西", value: 18 },
        { text: "安徽", value: 19 },
        { text: "江西", value: 20 },
        { text: "云南", value: 21 },
        { text: "黑龙江", value: 22 },
        { text: "山西", value: 23 },
        { text: "吉林", value: 24 },
        { text: "海南", value: 25 },
      ],
      option2: [
        { text: "商圈", value: "a" },
        { text: "智能排序", value: "b" },
        { text: "筛选", value: "c" },
      ],
      option3: [
        { text: "智能排序", value: "d" },
        { text: "销量最多", value: "e" },
        { text: "案例最多", value: "f" },
        { text: "评分最高", value: "9" },
        { text: "离我最近", value: "8" },
        { text: "最新上架", value: "7" },
        { text: "价格最高", value: "6" },
        { text: "价格最低", value: "5" },
      ],
      option4: [
        { text: "筛选", value: "h" },
        { text: "智能排序", value: "i" },
        { text: "筛选", value: "g" },
      ],
      option5: [
        { text: "济南", value: "k" },
        { text: "最近访问", value: 1 },
        { text: "热门城市", value: 2 },
        { text: "全部城市", value: 3 },
        { text: "北京", value: 4 },
        { text: "上海", value: 5 },
        { text: "天津", value: 6 },
        { text: "重庆", value: 7 },
        { text: "广东", value: 8 },
        { text: "新江", value: 9 },
        { text: "江苏", value: 10 },
        { text: "河南", value: 11 },
        { text: "湖北", value: 12 },
        { text: "湖南", value: 13 },
        { text: "山东", value: 14 },
        { text: "辽宁", value: 15 },
        { text: "福建", value: 16 },
        { text: "河北", value: 17 },
        { text: "陕西", value: 18 },
        { text: "安徽", value: 19 },
        { text: "江西", value: 20 },
        { text: "云南", value: 21 },
        { text: "黑龙江", value: 22 },
        { text: "山西", value: 23 },
        { text: "吉林", value: 24 },
        { text: "海南", value: 25 },
      ],
      option6: [
        { text: "最热日记", value: "l" },
        { text: "最新回复", value: "h" },
        { text: "最新日记", value: "i" },
        { text: "诊断报告优先", value: "1" },
      ],
      option9: [
        { text: "济南", value: "2" },
        { text: "济南", value: 0 },
        { text: "最近访问", value: 1 },
        { text: "热门城市", value: 66 },
        { text: "全部城市", value: 3 },
        { text: "北京", value: 4 },
        { text: "上海", value: 5 },
        { text: "天津", value: 6 },
        { text: "重庆", value: 7 },
        { text: "广东", value: 8 },
        { text: "新江", value: 9 },
        { text: "江苏", value: 10 },
        { text: "河南", value: 11 },
        { text: "湖北", value: 12 },
        { text: "湖南", value: 13 },
        { text: "山东", value: 14 },
        { text: "辽宁", value: 15 },
        { text: "福建", value: 16 },
        { text: "河北", value: 17 },
        { text: "陕西", value: 18 },
        { text: "安徽", value: 19 },
        { text: "江西", value: 20 },
        { text: "云南", value: 21 },
        { text: "黑龙江", value: 22 },
        { text: "山西", value: 23 },
        { text: "吉林", value: 24 },
        { text: "海南", value: 25 },
      ],
      option10: [
        { text: "智能排序", value: "3" },
        { text: "离我最近", value: "h" },
        { text: "案例数", value: "i" },
        { text: "咨询量", value: "1" },
      ],
      option11: [
        { text: "济南", value: "4" },
        { text: "济南", value: 0 },
        { text: "最近访问", value: 1 },
        { text: "热门城市", value: 2 },
        { text: "全部城市", value: 3 },
        { text: "北京", value: 4 },
        { text: "上海", value: 5 },
        { text: "天津", value: 6 },
        { text: "重庆", value: 7 },
        { text: "广东", value: 8 },
        { text: "新江", value: 9 },
        { text: "江苏", value: 10 },
        { text: "河南", value: 11 },
        { text: "湖北", value: 12 },
        { text: "湖南", value: 13 },
        { text: "山东", value: 14 },
        { text: "辽宁", value: 15 },
        { text: "福建", value: 16 },
        { text: "河北", value: 17 },
        { text: "陕西", value: 18 },
        { text: "安徽", value: 19 },
        { text: "江西", value: 20 },
        { text: "云南", value: 21 },
        { text: "黑龙江", value: 22 },
        { text: "山西", value: 23 },
        { text: "吉林", value: 24 },
        { text: "海南", value: 25 },
      ],
      option12: [
        { text: "智能排序", value: "5" },
        { text: "离我最近", value: "h" },
        { text: "好评率", value: "i" },
        { text: "案例数", value: "1" },
        { text: "满意度", value: "2" },
        { text: "咨询量", value: "3" },
        { text: "访问量", value: "4" },
      ],
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    yu() {
      this.$router.push("/");
      console.log(1);
    },
    wang() {
      this.$router.push("/search");
      console.log(1);
    },
    tiao(){
      this.$router.push("/")
    },
        detail(i){
      this.$router.push(`/detail?id=${i}&path=lnvisible_correction`)
    }
  },
  mounted() {
    this.axios.get("/tooth?cid=" + 4).then((res) => {
      this.tooth = res.data.results;
    });
    this.axios.get("/tooth_a?cid=" + this.active).then((res) => {
      let data = res.data.results;
      data.forEach((item) => {
        if (item.tooth_img !== null) {
          item.tooth_img = "http://127.0.0.1:3000/img/_wzy/" + item.tooth_img
        }
        this.tooth_a.push(item);
      });
    });
  },
};
</script>