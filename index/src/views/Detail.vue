<template>
  <div class="pos">
    <div class="poss">
      <!-- 头部轮播 -->
      <!-- <mt-swipe
        class="swipe"
        :showIndicators="false"
        :auto="0"
        :speed="0"
        :continuous="false"
      > -->
      <img
        class="swipe"
        :src="`http://127.0.0.1:3000/img/server_img/${data.goods_img}`"
        alt=""
        v-cloak
      />
      <!-- 头部轮播结束 -->
      <!-- 轮播图上的精灵图标 -->
      <div>
        <div @click="back()">
          <img
            class="left"
            src="http://127.0.0.1:3000/img/_lzz/left.png"
            alt=""
          />
        </div>
        <div class="right">
          <router-link to="/shopping_car">
            <img src="http://127.0.0.1:3000/img/_lzz/cart.png" alt="" />
          </router-link>
        </div>
        <div class="cell">
          <van-cell @click="showShare = true" class="cls"
            ><img src="http://127.0.0.1:3000/img/_lzz/fen.png" alt=""
          /></van-cell>
        </div>
      </div>
      <!-- 底部弹出的内容 -->
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
        duration="0.1"
      ></van-share-sheet>
      <!-- 弹出内容结束 -->
      <!-- 精灵图结束 -->
      <!-- 详情内容 -->
      <div class="deta">
        <div class="detail">
          <div>
            <p>
              ¥<span>{{ this.data.prepay }}</span>
            </p>
            <!-- <p>¥<span>{{this.data.original_price}}</span></p> -->
            <span
              >门市价：<del>¥{{ this.data.original_price }}</del></span
            >
          </div>
          <div>
            <div class="detail_1">
              <div class="fist">
                <p>
                  <img src="http://127.0.0.1:3000/img/_lzz/lin2.png" alt="" />
                </p>
                <span>降价通知</span>
              </div>
              <div>
                <p>
                  <img src="http://127.0.0.1:3000/img/_lzz/xin2.png" alt="" />
                </p>
                <span>收藏</span>
              </div>
            </div>
          </div>
        </div>
        <p>
          {{ this.data.goods_name }}
        </p>
        <div class="detail">
          <div class="city">
            <span>{{ this.data.territory }}</span>
          </div>
          <div>
            <img src="http://127.0.0.1:3000/img/_lzz/li.png" alt="" />
            <span>已售：20</span>
          </div>
        </div>
        <!-- 详情1 -->
        <div class="you">
          <div>
            <div>
              <span>优惠</span>
            </div>
            <div>分期</div>
            <div><span>¥5.37</span>×12期,支持花呗</div>
          </div>
          <div>
            <img src="http://127.0.0.1:3000/img/_lzz/right.png" alt="" />
          </div>
        </div>
        <!-- 1结束 -->
        <!-- 详情2 -->
        <div class="you">
          <div>
            <div>
              <span>活动</span>
            </div>
            <div>换购</div>
            <div>买一件课优惠换购热销商品</div>
          </div>
          <div>
            <img src="http://127.0.0.1:3000/img/_lzz/right.png" alt="" />
          </div>
        </div>
        <!-- 2结束 -->
        <!-- 3 -->
        <div class="baozhang">
          <div>
            <div>
              <span>保障</span>
            </div>
            <div>
              <img src="http://127.0.0.1:3000/img/_lzz/ys.png" alt="" />
              闪电/过期退
            </div>
            <div>
              <img src="http://127.0.0.1:3000/img/_lzz/ys.png" alt="" />先行赔付
            </div>
          </div>
          <div>
            <img src="http://127.0.0.1:3000/img/_lzz/right.png" alt="" />
          </div>
        </div>
        <!-- 3结束 -->
        <!-- 详情结束 -->
      </div>
    </div>
    <!-- 详情底部 -->
    <div class="forter">
      <div class="fort">
        <div class="xuan">
          <div>
            <div><img src="http://127.0.0.1:3000/img/_lzz/phone.png" /></div>
            <span>电话</span>
          </div>
          <div>
            <div><img src="http://127.0.0.1:3000/img/_lzz/mz.png" /></div>
            <span>面诊</span>
          </div>
          <div>
            <div><img src="http://127.0.0.1:3000/img/_lzz/zx.png" /></div>
            <span>咨询</span>
          </div>
        </div>
        <div class="btn">
          <div class="btn1">
            <span @click="addshopping_car">加入购物车</span>
          </div>
          <div class="btn2">
            <router-link
              :to="`/topay?price=${this.data.original_price}&count=1`"
              >立即购买</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 底部结束 -->
  </div>
</template>
<style scoped>
.swipe {
  height: 380px;
  width: 100%;
}
.swipe img {
}
.pos {
  position: relative;
}
.poss {
  margin-bottom: 20%;
}
.left {
  position: absolute;
  top: 20px;
  left: 5px;
}
.right {
  position: absolute;
  top: 20px;
  right: 60px;
}
.cell {
  position: absolute;
  top: 20px;
  right: 10px;
  margin: 0;
  padding: 0;
}
.cls {
  padding: 0;
  background-color: transparent;
}
/* 详情页的样式 */
.deta {
  padding: 0 15px;
}
.detail {
  display: flex;
  justify-content: space-between;
}
.detail_1 {
  display: flex;
  align-items: center;
  padding: 0px 0 10px 0;
}
.detail > div p {
  color: #e73f3d;
  font-size: 2rem;
  margin-bottom: 4px;
}
.detail_1 p {
  text-align: center;
  margin-bottom: 5px;
}
.fist {
  margin-right: 10px;
}
div > span {
  font-size: 0.8rem;
}
.deta > p {
  font-size: 16px;
  font-weight: bolder;
  line-height: 26px;
}
.city {
  padding-top: 4px;
}

.you {
  border: 6px solid #f5f5f5;
  border-left: 0;
  border-right: 0;
  margin-top: 15px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
/* 详情1 ， 2 */
.you > div {
  display: flex;
}
.you > div > div:nth-child(1) > span {
  font-weight: 600;
  font-size: 1.2rem;
  margin-right: 4px;
  line-height: 28px;
}
.you > div :nth-child(2) {
  background-color: #ffdde8;
  width: 40px;
  font-size: 14px;
  color: #bd949e;
  text-align: center;
  line-height: 28px;
}
.you > div :nth-child(3) > span {
  font-size: 16px;
  color: #bd949e;
  text-align: center;
  line-height: 28px;
}
.you > div :nth-child(3) {
  text-align: center;
  line-height: 28px;
}
/* 详情1  ， 2 */
.baozhang {
  border: 6px solid #f5f5f5;
  border-left: 0;
  border-right: 0;
  margin-top: 15px;
  padding-top: 10px;
  display: flex;
  line-height: 28px;
  justify-content: space-between;
}
.baozhang > div {
  display: flex;
}
.baozhang > div > div:nth-child(1) > span {
  font-weight: 600;
  font-size: 1.2rem;
  margin-right: 4px;
}
/* 详情底部 */
.forter {
  position: fixed;
  bottom: 0px;
  width: 95%;
  left: 15px;
  padding: 3% 0;
  box-sizing: border-box;
  background-color: azure;
}
.fort {
  display: flex;
  justify-content: space-between;
}
.xuan {
  display: flex;
  justify-content: space-between;
  width: 45%;
}
.xuan > div {
  width: 30%;
}
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn > div {
  border: 0;
  color: white;
  padding: 0;
  margin: 0;
  padding: 12px 10px;
}
.btn > div > a {
  color: white;
}
.btn1 {
  border-radius: 30px;
  background-color: #ee8781;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn2 {
  border-radius: 30px;
  background-color: #e56864;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
/* 底部结束 */
</style>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

export default {
  data() {
    return {
      data: [],
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
      path: "",
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    back() {
      this.$router.push(`/${this.path}`);
    },
    addshopping_car() {
      // this.$router.push(`/shopping_car?path=detail&id=${this.data.goods_id}`);
      
      if(localStorage.getItem('islogined')==1){
      console.log(1)
      console.log(this.data.goods_img)
      let obj = {
        goods_id: this.data.goods_id,
        username: localStorage.getItem("uname"),
        goods_img: this.data.goods_img,
        goods_name: this.data.goods_name,
        original_price: this.data.original_price,
        territory: this.data.territory,
        prepay: this.data.prepay,
        goods_num: 1,
      };
      this.axios.post("/updateshop",this.qs.stringify(obj)).then(res=>{
        if(res.data.code==1){
          this.$router.push(`/shopping_car?path=detail&id=${this.data.goods_id}`);
          console.log(1)
        }else{
          this.$toast({message:'添加购物车失败'})
        }
      });}else{
        this.$router.push('/login')
      }
    },
  },
  created(){
    let str = location.search.slice(1);
    let arr = str.split("&");

    this.path = arr[1].split("=")[1];
    let id = arr[0].split("=")[1];
    console.log(this.path);
    // console.log(id)
    this.axios.get("/xiangqing?cid=" + id).then((res) => {
      // console.log(res.data)
      this.data = res.data.results[0];
      console.log(this.data);
     
    });

  },
  beforeMount(){
    
  },
  mounted() {
    // let str = location.search.slice(1);
    // let arr = str.split("&");

    // this.path = arr[1].split("=")[1];
    // let id = arr[0].split("=")[1];
    // console.log(this.path);
    // // console.log(id)
    // this.axios.get("/xiangqing?cid=" + id).then((res) => {
    //   // console.log(res.data)
    //   this.data = res.data.results[0];
    //   console.log(this.data);
     
    // });
  },
};
</script>