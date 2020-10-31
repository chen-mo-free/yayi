<template>
  <div>
    <div>
      <mt-header title="齿科大咖面诊间" class="roof" fixed>
        <router-link slot="left" to="/recommend">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" @click="showPopup" slot="right"></mt-button>
      </mt-header>
      <van-popup v-model="show" position="top" :style="{ height: '10%' }">
        <div class="fxsx">
          <div class="fenxiang">
            <img src="http://127.0.0.1:3000/img/_zcc/can_fenxiang.png" alt="" />
            <p>分&nbsp;&nbsp;享</p>
          </div>
          <div class="shuaxin">
            <img src="http://127.0.0.1:3000/img/_zcc/can_shuaxin.png" alt="" />
            <p>刷&nbsp;&nbsp;新</p>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="daka">
      <img src="http://127.0.0.1:3000/img/_zcc/can_daka.jpg" alt="" />
    </div>
    <div class="shangpin">
      <div class="shangpin1">
        <img src="http://127.0.0.1:3000/img/_zcc/can_shangpin1.jpg" alt="" />
        <p>牙齿好看是一种什么体验?</p>
        <span>福华口腔青灵</span>
      </div>
      <div class="shangpin1">
        <img src="http://127.0.0.1:3000/img/_zcc/can_shangpin1.jpg" alt="" />
        <p>牙齿好看是一种什么体验?</p>
        <span>福华口腔青灵</span>
      </div>
      <div class="shangpin1">
        <img src="http://127.0.0.1:3000/img/_zcc/can_shangpin1.jpg" alt="" />
        <p>牙齿好看是一种什么体验?</p>
        <span>福华口腔青灵</span>
      </div>
    </div>
    <div class="city">
      <router-link to="/select">
        <div class="city1">
          <p>全部城市</p>
          <img src="http://127.0.0.1:3000/img/_zcc/can_xiala.png" alt="" />
        </div>
      </router-link>
      <div class="city2">
        <p>全部项目</p>
        <img src="http://127.0.0.1:3000/img/_zcc/can_xiala.png" alt="" />
      </div>
      <div class="city3">
        <p>智能排序</p>
        <img src="http://127.0.0.1:3000/img/_zcc/can_xiala.png" alt="" />
      </div>
    </div>
    <div>
      <div v-for="(eno, key) in this.one" :key="key" class="daka1">
        <div>
          <div><img src="http://127.0.0.1:3000/img/_zcc/can_daka1.jpg" alt="" /></div>
          <div><img src="http://127.0.0.1:3000/img/_zcc/can_xianshi.png" alt="" /></div>
          <div>限时抢购</div>
        </div>
        <div>
          <p>
            {{ eno.goods_name }}
          </p>
          <p>{{ eno.territory }}</p>
          <p>已售:{{ eno.sold }}</p>
          <div>
            <span>￥{{ eno.prepay }}</span>
            <del>￥{{ eno.original_price }}</del>
          </div>
          <p>活动结束后恢复￥13740，仅剩13个</p>
        </div>
      </div>
      <div class="huise"></div>
    </div>
  </div>
</template>
<style scoped>
.roof {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  font-size: 15px;
  color: black;
}
.mint-header-title {
  font-size: 16px;
}
.fxsx {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  margin-top: 50px;
}
.fenxiang {
  font-size: 12px;
  color: #111111;
  margin-top: -30px;
  margin-left: 91.6px;
}
.fenxiang > img {
  margin-left: 4px;
}
.shuaxin {
  font-size: 12px;
  color: #111111;
  margin-top: -33px;
  margin-left: 270px;
}
.shuaxin > img {
  margin-left: 4px;
}
.shuaxin > p {
  margin-top: 5px;
  margin-left: -1px;
}
.fenxiang > p {
  margin-top: 5px;
  margin-left: -1px;
}
.daka > img {
  width: 100%;
  margin-top: 50px;
}
.shangpin {
  display: flex;
}
.shangpin1 {
  width: 31%;
  height: 200px;
  background: #ffffff;
  margin-top: 10px;
  margin-left: 10px;
  border: 1px solid #f3f5f4;
}
.shangpin1 > img {
  width: 90%;
  /* height: 100px; */
  border-radius: 10px;
  margin-left: 6px;
}
.shangpin1 > p {
  font-size: 12px;
  color: #000000;
  margin-top: 5px;
  margin-left: 5px;
}
.shangpin1 > span {
  margin-top: 7px;
  margin-left: 17px;
  color: #000000;
  font-size: 13px;
}
.city {
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
}
.city p {
  font-size: 14px;
  display: inline;
}
.city2,
.city3 {
  margin-left: 39.7px;
  display: inline;
  margin-top: 12px;
}
.city1 {
  margin-top: 12px;
  margin-left: 39.7px;
}
.daka1 {
  display: flex;
  width: 100%;
  height: 124px;
  margin-top: 15px;
}
.daka1 > :first-child > :first-child > img {
  width: 100px;
}
.daka1 > :first-child > :nth-child(2) > img {
  width: 14px;
}
.daka1 > :first-child {
  margin-left: 15px;
}
.daka1 > :first-child > :nth-child(3) {
  font-size: 12px;
  margin-top: -12px;
  margin-left: 24px;
  color: #999999;
}
.daka1 > :first-child > :nth-child(2) {
  margin-top: 7px;
}
.daka1 > :nth-child(2) {
  margin-left: 5px;
}
.daka1 > :nth-child(2) > :first-child {
  font-size: 14px;
}
.daka1 > :nth-child(2) > :nth-child(2),
.daka1 > :nth-child(2) > :nth-child(3) {
  font-size: 10px;
  margin-top: 10px;
  color: #999999;
}
.daka1 > :nth-child(2) > :nth-child(4) {
  margin-top: 13px;
}
.daka1 > :nth-child(2) > :nth-child(4) > :first-child {
  font-size: 18px;
  color: #fa819c;
}
.daka1 > :nth-child(2) > :nth-child(4) > :nth-child(2) {
  font-size: 13px;
  margin-top: 3px;
  margin-left: 10px;
  color: #666666;
}
.daka1 > :nth-child(2) > :nth-child(5) {
  font-size: 12px;
  margin-top: 23px;
  color: #999999;
}
.huise {
  width: 100%;
  height: 10px;
  background: #f2f6f7;
  margin-top: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      show: false,
      one: [],
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
  mounted() {
    this.axios.get("/tooth").then((res) => {
      let dataString = JSON.stringify(res.data.info);
      let data = JSON.parse(dataString);
      this.one = data;
      // console.log(this.one);
    });
  },
};
</script>