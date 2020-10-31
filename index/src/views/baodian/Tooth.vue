<template>
  <div id="app" class="a1">
    <mt-header title="美牙宝典" class="roof" fixed>
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
    <img class="images" src="http://127.0.0.1:3000/img/_zcc/can_picture1.jpg" alt="" />
    <img class="images1" src="http://127.0.0.1:3000/img/_zcc/can_picture2.jpg" alt="" />
    <img class="images1" src="http://127.0.0.1:3000/img/_zcc/can_picture3.png" alt="" />
    <div style="display:flex">
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_base4.jpg" alt="" />
          <p>瓷贴面</p>
          <p>济南济东口腔医院</p>
          <p>
            <span>¥6800</span>
            <span>¥6800</span>
          </p>
          <img class="tupian" src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt="" />
        </div>
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_base6.jpg" alt="" />
          <p>瓷贴面</p>
          <p>济南圣贝口腔医院</p>
          <p>
            <span>¥2700</span>
            <span>¥2700</span>
          </p>
          <img src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt="" />
        </div>
    </div>
    <img class="images1" src="http://127.0.0.1:3000/img/_zcc/can_picture4.png" alt="" />
    <div style="display:flex">
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_csb5.jpg" alt="" />
          <p>皓齿美白</p>
          <p>济南济东口腔医院</p>
          <p>
            <span>¥2000</span>
            <span>¥2000</span>
          </p>
          <img class="tupian" src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt="" />
        </div>
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_tooth1.jpg" alt="" />
          <p>皓齿美白</p>
          <p>青岛维乐口腔</p>
          <p>
            <span>¥1998</span>
            <span>¥1998</span>
          </p>
          <img src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt=""/>
        </div>
    </div>
    <img class="images1" src="http://127.0.0.1:3000/img/_zcc/can_picture5.png" alt=""/>
        <div style="display:flex">
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_tooth2.jpg" alt="" />
          <p>合金烤瓷牙</p>
          <p>拜博口腔 (济南总店)</p>
          <p>
            <span>¥1900</span>
            <span>¥1900</span>
          </p>
          <img class="tupian" src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt="" />
        </div>
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_tooth3.jpg" alt="" />
          <p>全瓷牙</p>
          <p>拜博口腔 (济南总店)</p>
          <p>
            <span>¥3600</span>
            <span>¥3600</span>
          </p>
          <img src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt=""/>
        </div>
    </div>
    <img class="images1" src="http://127.0.0.1:3000/img/_zcc/can_picture6.png" alt=""/>
    <div style="display:flex">
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_tooth4.jpg" alt="" />
          <p>合金烤瓷牙</p>
          <p>拜博口腔 (济南总店)</p>
          <p>
            <span>¥1900</span>
            <span>¥1900</span>
          </p>
          <img class="tupian" src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt="" />
        </div>
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_base1.jpg" alt="" />
          <p>全瓷牙</p>
          <p>拜博口腔 (济南总店)</p>
          <p>
            <span>¥3600</span>
            <span>¥3600</span>
          </p>
          <img src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt=""/>
        </div>
    </div>
    <img class="images1" src="http://127.0.0.1:3000/img/_zcc/can_picture7.png" alt=""/>
        <div style="display:flex">
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_base7.jpg" alt="" />
          <p>合金烤瓷牙</p>
          <p>拜博口腔 (济南总店)</p>
          <p>
            <span>¥1900</span>
            <span>¥1900</span>
          </p>
          <img class="tupian" src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt="" />
        </div>
        <div class="xiya2">
          <img src="http://127.0.0.1:3000/img/_zcc/can_tooth5.jpg" alt="" />
          <p>全瓷牙</p>
          <p>拜博口腔 (济南总店)</p>
          <p>
            <span>¥3600</span>
            <span>¥3600</span>
          </p>
          <img src="http://127.0.0.1:3000/img/_zcc/can_qianggou.png" alt=""/>
        </div>
    </div>
        <div class="city" style="margin-top: 20px">
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
        <div class="base">
          <div v-for="(noe,key) in this.one" :key="key" @click="detail(noe.goods_id)" class="base1">
            <!-- <img src="http://127.0.0.1:3000/img/_zcc/can_base1.jpg" alt="" /> -->
            <img :src="`http://127.0.0.1:3000/img/server_img/${noe.goods_img}`" alt="" />
            <p>{{noe.goods_name}}</p>
            <p>{{noe.territory}}</p>
            <p>已售：{{noe.sold}}</p>
            <p>
              <span>¥{{noe.prepay}}</span>
              <del>¥{{noe.original_price}}</del>
            </p>
          </div>
        </div>
  </div>
</template>
<style scoped>
.a1 {
  width: 100%;
  background-image: url("http://127.0.0.1:3000/img/_zcc/can_background.png");
}
.roof {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  font-size: 18px;
  color: black;
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
.images {
  width: 100%;
  margin-top: 50px;
}
.images1 {
  display: flex;
  width: 100%;
  margin-top: 20px;
}
.xiya1 > :nth-child(5),
.xiya2 > :nth-child(5)
 {
  width: 90px;
  height: 35px;
  margin-left: 39.4px;
}

.xiya1 {
  width: 50%;
  box-sizing: border-box;
}
.xiya2
 {
  width: 45%;
  height: 240px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-top: 10px;
  margin-left: 12px;
}
.xiya2 > :nth-child(1)
 {
  width: 150px;
  height: 125px;
  margin-left: 7.5px;
  margin-top: 6px;
}
.xiya2 > :nth-child(2)
 {
  text-align: center;
  margin-top: 7px;
}

.xiya2 > :nth-child(3)
 {
  text-align: center;
  font-size: 14px;
  color: #767676;
  margin-top: 7px;
  margin-bottom: 7px;
}
.xiya1 > :nth-child(4),
.xiya2 > :nth-child(4)
{
  color: #d56980;
  text-align: center;
}
.xiya1 > p > :nth-child(2),
.xiya2 > p > :nth-child(2)
 {
  color: #856e4c;
  margin-left: 5px;
  font-size: 14px;
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
.base {
  width: 100%;
  height: 1000px;
  background-color: #f1f5f4;
  /* margin-top: 20px; */
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
      show: false,
      one:[]
    };
  },
  mounted(){
      this.axios.get("/tooth-z").then((res) => {
      // let dataString=JSON.stringify(res.data.info);
      // let data=JSON.parse(dataString); 
      let data=res.data.info
      // console.log(data)
      this.one=data;
      // console.log(this.one);
    });
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    detail(i){
      this.$router.push(`/detail?id=${i}&path=tooth`)
    }
    
  },
};
</script> 