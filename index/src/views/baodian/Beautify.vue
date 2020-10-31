<template>
  <div id="app" class="a1">
    <mt-header title="齿科专场" class="roof" fixed>
      <router-link slot="left" to="/">
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
    <img class="images" src="http://127.0.0.1:3000/img/_zcc/can_homepage1.jpg" alt="" />
    <div class="a2">
      <mt-navbar v-model="active">
        <mt-tab-item @click="getdata(1)" id="1">
          <img
            class="anniu"
            src="http://127.0.0.1:3000/img/_zcc/can_xiya_h.png"
            alt=""
            v-if="active == '1'"
          />
          <img
            class="anniu"
            src="http://127.0.0.1:3000/img/_zcc/can_xiya.png"
            alt=""
            v-else
          />
        </mt-tab-item>
        <mt-tab-item @click="getdata(2)" id="2">
          <img
            class="anniu"
            src="http://127.0.0.1:3000/img/_zcc/can_meibai_h.png"
            alt=""
            v-if="active == '2'"
          />
          <img
            class="anniu"
            src="http://127.0.0.1:3000/img/_zcc/can_meibai.png"
            alt=""
            v-else
          />
        </mt-tab-item>
        <mt-tab-item @click="getdata(3)" id="3">
          <img
            class="anniu"
            src="http://127.0.0.1:3000/img/_zcc/can_tiepian.png"
            alt=""
            v-if="active == '3'"
          />
          <img
            class="anniu"
            src="http://127.0.0.1:3000/img/_zcc/can_tiemian.png"
            alt=""
            v-else
          />
        </mt-tab-item>
        <mt-tab-item @click="getdata(4)" id="4">
          <img
            class="anniu"
            src="http://127.0.0.1:3000/img/_zcc/can_jiaozheng_h.png"
            alt=""
            v-if="active == '4'"
          />
          <img
            class="anniu"
            src="http://127.0.0.1:3000/img/_zcc/can_jiaozheng.png"
            alt=""
            v-else
          />
        </mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="1"
          ><img class="anniu_t" src="http://127.0.0.1:3000/img/_zcc/can_xy.png" alt=""
        /></mt-tab-container-item>
        <mt-tab-container-item id="2"
          ><img class="anniu_t" src="http://127.0.0.1:3000/img/_zcc/can_mb.png" alt=""
        /></mt-tab-container-item>
        <mt-tab-container-item id="3"
          ><img class="anniu_t" src="http://127.0.0.1:3000/img/_zcc/can_tm.png" alt=""
        /></mt-tab-container-item>
        <mt-tab-container-item id="4"
          ><img class="anniu_t" src="http://127.0.0.1:3000/img/_zcc/can_jz.png" alt=""
        /></mt-tab-container-item>
      </mt-tab-container>
    </div>





    <div>
      <!-- <img class="back" src="http://127.0.0.1:3000/img/_zcc/can_background.jpg" alt=""> -->
    </div>
  </div>
</template>
<style scoped>
.a1 {
  width: 100%;
  /* height: 100vh; */
  background-image: url(http://127.0.0.1:3000/img/_zcc/can_background.jpg);
}
.mint-navbar {
  background-image: url(http://127.0.0.1:3000/img/_zcc/can_background.jpg);
}
.mint-tab-item {
  padding: 0 !important;
  margin: 20px 0;
}
.roof {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  font-size: 18px;
  color: black;
}
.images {
  width: 100%;
  margin-top: 50px;
}
.back {
  width: 100%;
}
.backg {
  width: 100%;
  position: absolute;
}
.anniu {
  width: 70px;
  height: 70px;
  margin-left: -35px;
  margin-top: -35px;
  position: absolute;
}
.anniu_t {
  width: 385.4px;
  float: left;
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
.xiya1 > :nth-child(5),
.xiya2 > :nth-child(5),
.xiya3 > :nth-child(5),
.xiya4 > :nth-child(5) {
  width: 90px;
  height: 35px;
  margin-left: 39.4px;
}
.xiya5 {
  display: flex;
  flex-wrap: wrap;
}

.xiya1 {
  width: 50%;
  box-sizing: border-box;
}

.xiya1,
.xiya2,
.xiya3,
.xiya4 {
  width: 45%;
  height: 240px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-top: 10px;
  margin-left: 12px;
}
.xiya1 > :nth-child(1) {
  width: 150px;
  /* height: 125px; */
  margin-left: 7.5px;
  margin-top: -3px;
}
.xiya2 > :nth-child(1),
.xiya3 > :nth-child(1),
.xiya4 > :nth-child(1) {
  width: 150px;
  height: 125px;
  margin-left: 7.5px;
  margin-top: 6px;
}
.xiya1 > :nth-child(2) {
  text-align: center;
  margin-top: -7px;
}
.xiya2 > :nth-child(2),
.xiya3 > :nth-child(2),
.xiya4 > :nth-child(2) {
  text-align: center;
  margin-top: 7px;
}

.xiya1 > :nth-child(3),
.xiya2 > :nth-child(3),
.xiya3 > :nth-child(3),
.xiya4 > :nth-child(3) {
  text-align: center;
  font-size: 14px;
  color: #767676;
  margin-top: 7px;
  margin-bottom: 7px;
}
.xiya1 > :nth-child(4),
.xiya2 > :nth-child(4),
.xiya3 > :nth-child(4),
.xiya4 > :nth-child(4) {
  color: #d56980;
  text-align: center;
}
.xiya1 > p > :nth-child(2),
.xiya2 > p > :nth-child(2),
.xiya3 > p > :nth-child(2),
.xiya4 > p > :nth-child(2) {
  color: #856e4c;
  margin-left: 5px;
  font-size: 14px;
}
.base {
  width: 100%;
  height: 1000px;
  background-color: #f1f5f4;
}
.base1 {
  width: 100%;
  height: 100px;
  background-color: #ffffff;
}
.base2 {
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  margin-top: 10px;
}
.base1 > :nth-child(1),
.base2 > :nth-child(1) {
  width: 80px;
  margin-top: 10px;
  margin-left: 25px;
  float: left;
}
.base1 > :nth-child(2),
.base2 > :nth-child(2) {
  font-size: 14px;
  padding-left: 120px;
  padding-top: 10px;
}
.base1 > :nth-child(3),
.base1 > :nth-child(4),
.base2 > :nth-child(3),
.base2 > :nth-child(4) {
  font-size: 8px;
  color: #6b6b6b;
  padding-left: 120px;
  padding-top: 5px;
}
.base1 > :nth-child(5),
.base2 > :nth-child(5) {
  margin-top: 5px;
}
.base1 > p > span,
.base2 > p > span {
  color: #e8618a;
  margin-left: 15px;
}
.base1 > p > del,
.base2 > p > del {
  font-size: 12px;
  color: #636363;
  margin-left: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      active: "1",
      show: false,
      i:[],
      two:[]
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    getdata(cid){
      this.axios.get('/beautify-zcc?cid='+cid).then((res) => {
      let dataString=JSON.stringify(res.data.info);
      let data=JSON.parse(dataString); 
      this.i=data;
      // console.log(this.i);
    });
    this.axios.get("/beautifytwo?cid="+cid).then((res) => {
      let dataString=JSON.stringify(res.data.info);
      let data=JSON.parse(dataString); 
      this.two=data;
      // console.log(this.two);
    });
    }
  },
  mounted() {
    this.getdata(1);

  },
};
</script> 