<template>
  <div class="container">
    <div class="box">
      <div class="home_top">
        <!-- 初始页面页头 -->
        <mt-header
          title="神州行牙医"
          class="header"
          v-if="this.gundong == 1"
          fixed
        >
          <mt-button slot="right"
            ><img src="http://127.0.0.1:3000/img/_bo/home_img/dingwei.png" slot="icon"
          /></mt-button>
          <mt-button slot="right" v-if="!this.add"
            ><router-link to="/select">去定位..</router-link></mt-button
          >
          <mt-button slot="right" v-else
            ><router-link to="/select">{{ add }}</router-link></mt-button
          >
        </mt-header>
        <!-- 盖过购物车页头  内容变-->
        <mt-header
          title="神州行牙医"
          class="header"
          v-else-if="this.gundong == 2"
          fixed
        >
          <mt-button slot="right"
            ><img
              src="http://127.0.0.1:3000/img/_bo/home_img/fangdajing.png"
              style="margin-left: 5px"
              slot="icon"
          /></mt-button>
          <mt-button slot="right" @click="toShoppingCar()"
            ><img
              src="http://127.0.0.1:3000/img/_bo/home_img/shopping_car.png"
              style="width: 24px; height: 24px; margin-left: 10px"
              slot="icon"
              alt=""
          /></mt-button>
        </mt-header>
        <!-- 盖过一部分内容页头  颜色变-->
        <mt-header title="神州行牙医" class="wheader" v-else fixed>
          <mt-button slot="right"
            ><img
              src="http://127.0.0.1:3000/img/_bo/home_img/fangdajingd.png"
              style="margin-left: 5px"
              slot="icon"
          /></mt-button>
          <mt-button slot="right" @click="toShoppingCar()"
            ><img
              src="http://127.0.0.1:3000/img/_bo/home_img/shopping_card.png"
              style="width: 24px; height: 24px; margin-left: 10px"
              slot="icon"
              alt=""
          /></mt-button>
        </mt-header>
        <!-- 给div一个相对定位，以便后续内容排列 -->
        <div style="position: relative; margin-top: 39px">
          <van-search
            class="header_input"
            placeholder="牙齿矫正要注意什么？"
            shape="round"
            background="#528DF5"
          /><img class="input_car" src="http://127.0.0.1:3000/img/_bo/home_img/shopping_car.png"  @click="toShoppingCar()"/>
          <div class="_fenlei">
            <router-link to="/tooth_washing"
              ><img
                src="http://127.0.0.1:3000/img/_bo/home_img/icon1.png"
                alt=""
              /><br />洗牙</router-link
            >
            <router-link to="/dental_implant"
              ><img
                src="http://127.0.0.1:3000/img/_bo/home_img/icon2.png"
                alt=""
              /><br />牙齿矫正</router-link
            >
            <router-link to="/e_max"
              ><img
                src="http://127.0.0.1:3000/img/_bo/home_img/icon3.png"
                alt=""
              /><br />牙齿美白</router-link
            >
            <router-link to="/lnvisible_correction"
              ><img
                src="http://127.0.0.1:3000/img/_bo/home_img/icon4.png"
                alt=""
              /><br />牙齿治疗</router-link
            >
            <router-link to="/orthodontics"
              ><img
                src="http://127.0.0.1:3000/img/_bo/home_img/icon5.png"
                alt=""
              /><br />隐形矫正</router-link
            >
            <router-link to="/skin_whitening"
              ><img
                src="http://127.0.0.1:3000/img/_bo/home_img/icon6.png"
                alt=""
              /><br />牙贴面</router-link
            >
            <router-link to="/treatment"
              ><img
                src="http://127.0.0.1:3000/img/_bo/home_img/icon7.png"
                alt=""
              /><br />全瓷牙</router-link
            >
            <router-link to="/veneer"
              ><img
                src="http://127.0.0.1:3000/img/_bo/home_img/icon8.png"
                alt=""
              /><br />种植牙</router-link
            >
          </div>
          <div>
            <mt-swipe class="_lunbo" :auto="3000">
              <mt-swipe-item
                ><router-link to="/beautify"
                  ><img
                    src="http://127.0.0.1:3000/img/_bo/home_img/lunbo1.png"
                    alt="" /></router-link
              ></mt-swipe-item>
              <mt-swipe-item
                ><router-link to="/tooth"
                  ><img
                    src="http://127.0.0.1:3000/img/_bo/home_img/lunbo2.png"
                    alt="" /></router-link
              ></mt-swipe-item>
              <mt-swipe-item
                ><router-link to="/beautify"
                  ><img
                    src="http://127.0.0.1:3000/img/_bo/home_img/lunbo3.png"
                    alt="" /></router-link
              ></mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="_fenlei4">
            <router-link to="/tooth"
              ><img src="http://127.0.0.1:3000/img/_bo/home_img/_icon1.png" alt=""
            /></router-link>
            <router-link to="/beautify"
              ><img src="http://127.0.0.1:3000/img/_bo/home_img/_icon2.png" alt=""
            /></router-link>
            <router-link to="/tooth"
              ><img src="http://127.0.0.1:3000/img/_bo/home_img/_icon3.png" alt=""
            /></router-link>
            <router-link to="/beautify"
              ><img src="http://127.0.0.1:3000/img/_bo/home_img/_icon4.png" alt=""
            /></router-link>
          </div>
          <div class="_bangdan">
            <span>齿科榜单</span>
            <div class="_bangdan_1">
              <div>
                <router-link to="/correct"
                  ><div>
                    <img src="http://127.0.0.1:3000/img/_bo/home_img/_bangdan1.png" alt="" />
                  </div>
                  <p>牙齿矫正榜</p>
                  <span>6582人跟着买</span></router-link
                >
              </div>
              <div>
                <router-link to="/cure"
                  ><div>
                    <img src="http://127.0.0.1:3000/img/_bo/home_img/_bangdan2.png" alt="" />
                  </div>
                  <p>牙齿美白榜</p>
                  <span>6582人跟着买</span></router-link
                >
              </div>
              <div>
                <router-link to="/skin"
                  ><div>
                    <img src="http://127.0.0.1:3000/img/_bo/home_img/_bangdan3.png" alt="" />
                  </div>
                  <p>牙齿治疗榜</p>
                  <span>6582人跟着买</span></router-link
                >
              </div>
            </div>
          </div>
          <div class="_pinpai">
            <div>
              <span class="_pinpai_left">品牌馆</span
              ><router-link to="/brand"
                ><span class="_pinpai_right">更多品牌 ></span></router-link
              >
            </div>
            <div class="_pinpai_div">
              <router-link to="/brand"
                ><div>
                  <div><img src="http://127.0.0.1:3000/img/_bo/home_img/pinpai1.png" alt="" /></div>
                  <span class="_pinpai_jigou_red">机构品牌</span
                  ><span class="_pinpai_span">拜博口腔</span>
                </div></router-link
              >
              <router-link to="/brand"
                ><div>
                  <div><img src="http://127.0.0.1:3000/img/_bo/home_img/pinpai2.png" alt="" /></div>
                  <span class="_pinpai_jigou_red">机构品牌</span
                  ><span class="_pinpai_span">正雅矫正</span>
                </div></router-link
              >
              <router-link to="/brand"
                ><div>
                  <div><img src="http://127.0.0.1:3000/img/_bo/home_img/pinpai3.png" alt="" /></div>
                  <span class="_pinpai_jigou_blue">材料品牌</span
                  ><span class="_pinpai_span">美立刻</span>
                </div></router-link
              >
              <router-link to="/brand"
                ><div>
                  <div><img src="http://127.0.0.1:3000/img/_bo/home_img/pinpai4.png" alt="" /></div>
                  <span class="_pinpai_jigou_blue">材料品牌</span
                  ><span class="_pinpai_span">隐适美</span>
                </div></router-link
              >
            </div>
          </div>
          <div class="_chazhao">
            <!-- 此div包含三个图片跳转 -->
            <router-link to="/">
              <img src="http://127.0.0.1:3000/img/_bo/home_img/yiyuan.png" alt="" /><br />
              找医院</router-link
            >
            <router-link to="/">
              <img
                src="http://127.0.0.1:3000/img/_bo/home_img/yisheng.png"
                alt=""
              /><br />找医生</router-link
            >
            <router-link to="/">
              <img
                src="http://127.0.0.1:3000/img/_bo/home_img/riji.png"
                alt=""
              /><br />看日记</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 底部选项卡开始 -->
    <div>
      <mt-tabbar v-model="tabbar" fixed>
        <mt-tab-item id="index">
          首页
          <img
            src="http://127.0.0.1:3000/img/_bo/home_img/dis_yachi.png"
            slot="icon"
            v-if="tabbar == 'index'"
          />
          <img src="http://127.0.0.1:3000/img/_bo/home_img/en_yachi.png" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="tuijian">
          我的
          <img
            src="http://127.0.0.1:3000/img/_bo/home_img/dis_xin.png"
            slot="icon"
            v-if="tabbar == 'me'"
          />
          <img src="http://127.0.0.1:3000/img/_bo/home_img/en_xin.png" slot="icon" v-else />
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style  scoped>
.header a {
  color: white;
}
._pinpai_span {
  font-size: 12px;
  font-weight: 550;
  color: black;
}
._pinpai_jigou_red {
  margin-left: 7px;
  width: 80%;
  text-align: center;
  display: block;
  font-size: 12px;
  color: #c45e7b;
  border: 1px solid #c45e7b;
}
._pinpai_jigou_blue {
  margin-left: 7px;
  width: 80%;
  text-align: center;
  display: block;
  font-size: 12px;
  color: #3f77ee;
  border: 1px solid #3f77ee;
}
._pinpai_div {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  text-align: center;
}
._pinpai_div a {
  width: 19%;
}
._pinpai_div a > div > div {
  width: 100%;
}
._pinpai_div a > div > div img {
  width: 64.15px;
  height: 64.15px;
}
._pinpai_left {
  display: inline-block;
  background-image: url("http://127.0.0.1:3000/img/_bo/home_img/pinpaip.png");
  background-size: cover;
  margin-left: 5px;
  margin-top: 5px;
  font-weight: 550;
}
._pinpai_right {
  display: inline-block;
  margin-left: 66%;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 550;
  color: #7a7a7a;
}
.container {
  margin: 0;
  padding: 0;
}
.header_input {
  width: 90%;
  text-align: left;
}
header {
  background: linear-gradient(to right, #50a0f5, #5587f8);
  z-index: 9999 !important;
  font-size: 15px;
}
header h1 {
  font-weight: 600;
}
.wheader {
  background: white;
  z-index: 9999 !important;
  color: black;
  font-size: 14px;
}
.input_car {
  position: absolute;
  left: 89%;
  top: 10px;
}
.box {
  width: 100%;
  margin: auto;
  margin-bottom: 60px;
}
.home_top {
  background-image: url("http://127.0.0.1:3000/img/_bo/home_img/background.png");
  background-repeat: no-repeat;
  background-size: contain;
}
._fenlei {
  width: 90%;
  height: 170px;
  background: white;
  margin: 5% auto;
  border-radius: 5%;
  margin-top: 4px;
  box-shadow: 1px 2px 16px rgba(182, 182, 182, 0.5);
  z-index: 100;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
._fenlei a {
  padding-top: 2%;
  display: block;
  width: 25%;
  color: #7a7a7a;
  font-size: 12px;
  line-height: 37px;
  margin-bottom: -10px;
  text-align: center;
}
._fenlei a img {
  width: 55%;
  margin: 0 2%;
}
._lunbo {
  width: 90%;
  height: 80px;
  background: white;
  margin: 5% auto;
  border-radius: 5%;
  margin-top: 4px;
  box-shadow: 1px 2px 16px rgba(182, 182, 182, 0.5);
  z-index: 100;
}
._lunbo div img {
  width: 100%;
  height: 80px;
  margin-bottom: 1px;
}
._fenlei4 {
  width: 90%;
  height: 168px;
  background: white;
  margin: 5% auto;
  border-radius: 5%;
  margin-top: 1%;
  box-shadow: 1px 2px 16px rgba(182, 182, 182, 0.5);
  z-index: 100;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  overflow: hidden;
}
._fenlei4 a {
  display: block;
  width: 50%;
}
._fenlei4 a img {
  width: 100%;
}
._bangdan {
  font-weight: 600;
  width: 90%;
  height: 100px;
  background: white;
  margin: 5% auto;
  border-radius: 5%;
  margin-top: 4px;
  box-shadow: 1px 2px 16px rgba(182, 182, 182, 0.5);
  z-index: 100;
  text-align: left;
  padding-top: 5px;
  padding-left: 5px;
}
._bangdan > span {
  display: block;
  background-image: url("http://127.0.0.1:3000/img/_bo/home_img/span.png");
  background-size: 20%;
  background-repeat: no-repeat;
}
._bangdan_1 {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  text-align: center;
}
._bangdan_1 > div {
  width: 30%;
  font-size: 13px;
}
._bangdan_1 > div a {
  display: block;
  color: black;
  font-family: "微软雅黑";
  font-weight: 700;
}
._bangdan_1 a p {
  background-image: url("http://127.0.0.1:3000/img/_bo/home_img/p.png");
}
._bangdan_1 > div a span {
  color: orange;
  font-size: 0.5rem;
  font-weight: 400;
}
._bangdan_1 div a img {
  width: 40%;
}
._pinpai {
  width: 90%;
  height: 130px;
  background: white;
  margin: 5% auto;
  border-radius: 5%;
  margin-top: 4px;
  box-shadow: 1px 2px 16px rgba(182, 182, 182, 0.5);
  z-index: 100;
  text-align: left;
}
._chazhao {
  width: 90%;
  height: 50px;
  background: white;
  margin: 5% auto;
  border-radius: 5%;
  margin-top: 4px;
  z-index: 100;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  text-align: center;
}
._chazhao a {
  width: 30%;
  display: block;
  box-shadow: 1px 2px 16px rgba(182, 182, 182, 0.5);
  padding-top: 5px;
  color: black;
  font-size: 13px;
  font-weight: 550;
}
._chazhao a img {
  margin-bottom: 2px;
}
</style>
<script>
export default {
  data() {
    return {
      gundong: 1,
      add: "",
      tabbar: "index",
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      option1: [{ text: localStorage.getItem("name"), value: 0 }],
      option2: [
        { text: "默认排序", value: 0 },
        { text: "好评排序", value: 1 },
        { text: "销量排序", value: 2 },
      ],
      option3: [
        { text: "默认排序", value: 0 },
        { text: "好评排序", value: 1 },
        { text: "销量排序", value: 2 },
      ],
      option4: [
        { text: "默认排序", value: 0 },
        { text: "好评排序", value: 1 },
        { text: "销量排序", value: 2 },
      ],
    };
  },
  methods: {
    torecom() {
      this.$router.push("/recommend");
      // console.log(1);
    },
    handleScroll() {
      let scrollY = document.documentElement.scrollTop;
      if (scrollY < 50) {
        this.gundong = 1;
      } else if (scrollY < 140) {
        this.gundong = 2;
      } else {
        this.gundong = 3;
      }
    },
    toShoppingCar() {
      this.$router.push("/shopping_car?path=/");
    },
  },
  mounted: function () {
    this.add = localStorage.getItem("name");
    // console.log(this.add);
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    tabbar() {
      if (this.tabbar == "tuijian") {
        this.$router.push("/recommend");
      }
    },
  },
};
</script>