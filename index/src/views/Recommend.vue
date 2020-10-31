<template>
  <div class="_container">
    <!-- 顶部开始 -->
    <mt-header class="header" title="我的" slot="right" fixed>
      <mt-button slot="left">
        <img
          src="http://127.0.0.1:3000/img/_bo/home_img/set.png"
          slot="icon"
          alt=""
          style="margin-right: 5px"
          @click="set"
        />
        <img
          src="http://127.0.0.1:3000/img/_bo/home_img/full_car.png"
          slot="icon"
          alt=""
          @click="toShoppingCar()"
        />
      </mt-button>
      <!-- <mt-button v-show="this.islogined == 1" slot="right">
        <img
          src="http://127.0.0.1:3000/img/_bo/home_img/touxiang.png"
          style="width: 32px; height: 32px; border-radius: 50%"
          slot="icon"
          alt=""
          v-show="this.gundong == 1"
          @click="routerData()"
        />
      </mt-button> -->
    </mt-header>
    <!-- 顶部结束 -->

    <!-- 中间内容开始 -->
    <div class="container">
      <div class="_bj">
        <!-- 这里是头像上面的背景 -->
      </div>
      <!-- 头像昵称部分开始 -->
      <div class="_photo-name">
        <!-- 这里头像昵称部分 -->
        <div class="_h_photo">
          <!-- 头像 -->
          <img
            v-if="this.islogined == 0"
            src="http://127.0.0.1:3000/img/_bo/home_img/unlogined.png"
            alt=""
          />
          <img
            v-else-if="this.head_portrait"
            :src="`http://127.0.0.1:3000/img/_bo/home_img/${this.head_portrait}`"
            alt=""
            @click="routerData()"
          />
          <img
            v-else
            src="http://127.0.0.1:3000/img/_bo/home_img/touxiang.png"
            alt=""
            @click="routerData()"
          />
        </div>
        <div class="_h_name">
          <!-- 昵称等 -->
          <div v-if="this.islogined == 0">
            <router-link to="/login" style="color: black"
              ><span class="_h_name_name">你好，请登录-></span></router-link
            >
          </div>
          <div v-else-if="this.username == ''">
            <span class="_h_name_name" @click="routerData()"
              >去设置昵称<img
                class="_h_name_img"
                src="http://127.0.0.1:3000/img/_bo/home_img/vip1.png"
                alt=""
            /></span>
            <router-link class="_h_name_a" to="/recommend"
              ><span>完善信息>&nbsp;|&nbsp;</span></router-link
            ><router-link to="/recommend" class="_h_name_b"
              ><span>申请认证></span></router-link
            >
          </div>
          <div v-else>
            <span class="_h_name_name" @click="routerData()"
              >{{ username
              }}<img
                class="_h_name_img"
                src="http://127.0.0.1:3000/img/_bo/home_img/vip1.png"
                alt=""
            /></span>
            <router-link class="_h_name_a" to="/recommend"
              ><span>完善信息>&nbsp;|&nbsp;</span></router-link
            ><router-link to="/recommend" class="_h_name_b"
              ><span>申请认证></span></router-link
            >
          </div>
        </div>
      </div>
      <!-- 头像昵称部分结束 -->
      <!-- 跳转简介开始 -->
      <div class="_jianjie" v-show="jianjie">
        <span class="_jianjiespan">{{ jianjie }}</span>
      </div>
      <div class="_jianjie" v-show="!jianjie">
        <router-link style="color: #808080" to="/data?path=recommend"
          ><span class="_jianjiespan"
            >填写简介，让大家更好的认识你</span
          ></router-link
        >
      </div>
      <!-- 跳转简介结束 -->
      <!-- 日记数等 开始 -->
      <div class="_diary">
        <router-link to="/">
          <div class="_diarydiv">
            <span v-if="!this.rijinum" class="_diarynum">0</span>
            <span v-else class="_diarynum">{{ num }}</span>
            <span>日记数</span>
          </div>
        </router-link>
        <router-link to="/">
          <div class="_diarydiv">
            <span v-if="!this.guanzhunum" class="_diarynum">0</span>
            <span v-else class="_diarynum">{{ num }}</span>
            <span>关注数</span>
          </div>
        </router-link>
        <router-link to="/">
          <div class="_diarydiv">
            <span v-if="!this.fensinum" class="_diarynum">0</span>
            <span v-else class="_diarynum">{{ num }}</span>
            <span>粉丝数</span>
          </div>
        </router-link>
        <router-link to="/">
          <div class="_diarydiv">
            <span v-if="!this.zannum" class="_diarynum">0</span>
            <span v-else class="_diarynum">{{ num }}</span>
            <span>赞与收藏</span>
          </div>
        </router-link>
        <router-link to="/">
          <div class="_diarydiv">
            <span v-if="!this.hudongnum" class="_diarynum">0</span>
            <span v-else class="_diarynum">{{ num }}</span>
            <span>互动信息</span>
          </div>
        </router-link>
      </div>
      <!-- 日记数等 结束 -->
      <!-- 足迹等 开始 -->
      <div class="_foot">
        <router-link to="/my_homepage">
          <div class="_footdiv">
            <img
              class="_footimg"
              src="http://127.0.0.1:3000/img/_bo/home_img/foot.png"
              slot="icon"
            />
            <span>我的足迹</span>
          </div>
        </router-link>
        <router-link to="/my_homepage">
          <div class="_footdiv">
            <img
              class="_footimg"
              src="http://127.0.0.1:3000/img/_bo/home_img/like.png"
              slot="icon"
            />
            <span>我喜欢的</span>
          </div>
        </router-link>
        <router-link to="/my_homepage">
          <div class="_footdiv">
            <img
              class="_footimg"
              src="http://127.0.0.1:3000/img/_bo/home_img/shoucang.png"
              slot="icon"
            />
            <span>我收藏的</span>
          </div>
        </router-link>
        <router-link to="/my_homepage">
          <div class="_footdiv">
            <img
              class="_footimg"
              src="http://127.0.0.1:3000/img/_bo/home_img/canyu.png"
              slot="icon"
            />
            <span>我参与的</span>
          </div>
        </router-link>
        <router-link to="/my_homepage">
          <div class="_footdiv">
            <img
              class="_footimg"
              src="http://127.0.0.1:3000/img/_bo/home_img/zhuye.png"
              slot="icon"
            />
            <span>我的主页</span>
          </div>
        </router-link>
      </div>
      <!-- 足迹等 结束 -->
      <!-- 私信 开始 -->
      <router-link class="_sixina" to="/private">
        <div class="_sixin">
          <div class="_sixintop">
            <!-- 这里是顶部 -->
            <div class="_sixin-top-left">
              <span>私信</span>
            </div>
            <div class="_sixin-top-right" v-show="this.islogined">
              <router-link to="/"
                ><span>99+未读私信 &nbsp; ></span></router-link
              >
            </div>
          </div>
          <div class="_sixinbottom">
            <!-- 这里是底部 -->
            <!-- 问答 -->
            <div class="_sixin-bottom-left">
              <!-- 头像 -->
              <div class="_sixin-botom-left-div"></div>
            </div>
            <div class="_sixin-bottom-right">
              <p>新氧问答君</p>
              <span>【千元问答红包限时派送 &nbsp;❗&nbsp;】 ...</span>
            </div>
          </div>
        </div>
      </router-link>
      <!-- 私信 结束 -->
      <!-- 四个活动开始 -->
      <div class="_huodong1">
        <router-link class="_huodong-a" to="/">
          <div class="_huodong-a-div">
            <img
              class="_huodong-a-div-img1"
              src="http://127.0.0.1:3000/img/_bo/home_img/huodong4.png"
              alt=""
            />
            <p class="_huodong-a-div-p">全场5折</p>
          </div>
        </router-link>
        <router-link class="_huodong-a" to="/">
          <div class="_huodong-a-div">
            <img
              class="_huodong-a-div-img1"
              src="http://127.0.0.1:3000/img/_bo/home_img/huodong3.png"
              alt=""
            />
            <p class="_huodong-a-div-p">特价推荐</p>
          </div>
        </router-link>
        <router-link class="_huodong-a" to="/">
          <div class="_huodong-a-div">
            <img
              class="_huodong-a-div-img1"
              src="http://127.0.0.1:3000/img/_bo/home_img/huodong2.png"
              alt=""
            />
            <p class="_huodong-a-div-p">超级榜单</p>
          </div>
        </router-link>
        <router-link class="_huodong-a" to="/">
          <div class="_huodong-a-div">
            <img
              class="_huodong-a-div-img1"
              src="http://127.0.0.1:3000/img/_bo/home_img/huodong1.png"
              alt=""
            />
            <p class="_huodong-a-div-p">狂欢卖场</p>
          </div>
        </router-link>
      </div>
      <!-- 四个活动结束 -->
      <!-- 我的订单模块 开始 -->
      <div class="_dingdan" @click="to_order">
        <!-- 上半截 名字 -->
        <div class="_dingdan-top">
          <span class="_dingdan-top-span">我的订单</span>
        </div>
        <div class="_dingdan-bottom">
          <router-link class="_dingdan-bottom-a" to="/order">
            <div class="">
              <img
                class="_dingdan-bottom-img"
                src="http://127.0.0.1:3000/img/_bo/home_img/daifukuan.png"
                alt=""
              />
              <p>待付款</p>
            </div>
          </router-link>
          <router-link class="_dingdan-bottom-a" to="/order">
            <div>
              <img
                class="_dingdan-bottom-img"
                src="http://127.0.0.1:3000/img/_bo/home_img/daishiyong.png"
                alt=""
              />
              <p>待使用</p>
            </div>
          </router-link>
          <router-link class="_dingdan-bottom-a" to="/order">
            <div>
              <img
                class="_dingdan-bottom-img"
                src="http://127.0.0.1:3000/img/_bo/home_img/diaocha.png"
                alt=""
              />
              <p>待写日记</p>
            </div>
          </router-link>
          <router-link class="_dingdan-bottom-a" to="/order">
            <div>
              <img
                class="_dingdan-bottom-img"
                src="http://127.0.0.1:3000/img/_bo/home_img/tuikuan.png"
                alt=""
              />
              <p>退款/售后</p>
            </div>
          </router-link>
          <router-link class="_dingdan-bottom-a" to="/order">
            <div>
              <img
                class="_dingdan-bottom-img"
                src="http://127.0.0.1:3000/img/_bo/home_img/dingdan.png"
                alt=""
              />
              <p>全部订单</p>
            </div>
          </router-link>
        </div>
      </div>
      <!-- 我的订单模块 结束 -->
      <!-- 创作中心模块 开始 -->
      <div class="_dingdan">
        <!-- 上半截 名字 -->
        <div class="_dingdan-top">
          <span class="_dingdan-top-span">创作中心</span>
        </div>
        <div class="_dingdan-bottom">
          <router-link class="_dingdan-bottom-a" to="/">
            <div class="">
              <img
                class="_dingdan-bottom-img1"
                src="http://127.0.0.1:3000/img/_bo/home_img/fabu.png"
                alt=""
              />
              <p>发布日记</p>
            </div>
          </router-link>
          <router-link class="_dingdan-bottom-a" to="/">
            <div>
              <img
                class="_dingdan-bottom-img1"
                src="http://127.0.0.1:3000/img/_bo/home_img/neirong.png"
                alt=""
              />
              <p>内容管理</p>
            </div>
          </router-link>
          <router-link class="_dingdan-bottom-a" to="/">
            <div>
              <img
                class="_dingdan-bottom-img1"
                src="http://127.0.0.1:3000/img/_bo/home_img/shuju.png"
                alt=""
              />
              <p>数据中心</p>
            </div>
          </router-link>
          <router-link class="_dingdan-bottom-a" to="/">
            <div>
              <img
                class="_dingdan-bottom-img1"
                src="http://127.0.0.1:3000/img/_bo/home_img/xueyuan.png"
                alt=""
              />
              <p>创作学院</p>
            </div>
          </router-link>
          <router-link class="_dingdan-bottom-a" to="/">
            <div>
              <img
                class="_dingdan-bottom-img1"
                src="http://127.0.0.1:3000/img/_bo/home_img/chuangzuo.png"
                alt=""
              />
              <p>创作首页</p>
            </div>
          </router-link>
        </div>
      </div>
      <!-- 创作中心模块 结束 -->
    </div>
    <!-- 中间内容结束 -->
    <!-- 底部选项卡开始 -->
    <div style="margin-top: 40px">
      <mt-tabbar v-model="tabbar" fixed>
        <mt-tab-item id="index">
          首页
          <img
            src="http://127.0.0.1:3000/img/_bo/home_img/dis_yachi.png"
            slot="icon"
            v-if="tabbar == 'index'"
          />
          <img
            src="http://127.0.0.1:3000/img/_bo/home_img/en_yachi.png"
            slot="icon"
            v-else
          />
        </mt-tab-item>
        <mt-tab-item id="me">
          我的
          <img
            src="http://127.0.0.1:3000/img/_bo/home_img/dis_xin.png"
            slot="icon"
            v-if="tabbar == 'me'"
          />
          <img
            src="http://127.0.0.1:3000/img/_bo/home_img/en_xin.png"
            slot="icon"
            v-else
          />
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style scoped>
._container {
  text-align: center;
}
._dingdan-bottom-img1 {
  display: block;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 25px;
  height: 25px;
}
._dingdan {
  width: 100%;
  height: 90px;
  border: 7px solid #f0f5f9;
  border-top: 0;
  box-sizing: border-box;
}
._dingdan-top {
  text-align: left;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 5px;
}
._dingdan-top span {
  margin-top: 5px;
  margin-left: 5px;
}
._dingdan-bottom {
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;
}
._dingdan-bottom-a {
  width: 20%;
}
._dingdan-bottom-a p {
  color: #5c5c5c;
  font-size: 12px;
}
._dingdan-bottom-img {
  display: block;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
._huodong {
  background-image: url("http://127.0.0.1:3000/img/_bo/home_img/huodongbj.png");
  background-size: cover;
  width: 100%;
  height: 75px;
  border: 7px solid #f0f5f9;
  border-top: 0;
  box-sizing: border-box;
}
._huodong1 {
  background-image: url("http://127.0.0.1:3000/img/_bo/home_img/huodongbj1.png");
  background-size: cover;
  width: 100%;
  height: 75px;
  border: 7px solid #f0f5f9;
  border-top: 0;
  box-sizing: border-box;
}
._huodong-a-div-img1 {
  margin-top: 9px;
  margin-bottom: 7px;
  width: 32px;
  height: 32px;
}
._huodong-a {
  display: inline-block;
  width: 25%;
  color: red;
  font-size: 13px;
  text-align: center;
}
._huodong-a-div-img {
  margin-top: 6px;
  margin-bottom: 3px;
}
._sixina {
  display: block;
}
._sixin {
  width: 100%;
  height: 100px;
  border: 7px solid #f0f5f9;
  border-top: 0;
  box-sizing: border-box;
}
._sixinbottom {
  width: 100%;
  height: 50px;
  text-align: left;
}
._sixin-bottom-left {
  display: inline-block;
  width: 20%;
  overflow: hidden;
}
._sixin-botom-left-div {
  margin-top: 10px;
  margin-left: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-image: url("http://127.0.0.1:3000/img/_bo/home_img/wenda.jpg");
  background-size: cover;
}
._sixin-bottom-right {
  width: 80%;
  display: inline-block;
}
._sixin-bottom-right p {
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
._sixin-bottom-right span {
  color: #a4a4a7;
  font-size: 12px;
}
._sixintop {
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: space-between;
}
._sixin-top-left {
  margin-top: 8px;
  margin-left: 8px;
  display: inline-block;
  color: black;
  font-size: 15px;
  font-weight: 600;
}

._sixin-top-right a {
  margin-top: 8px;
  margin-right: 10px;
  display: inline-block;
  color: #5587f8;
  font-size: 12px;
}
._footimg {
  padding-top: 15px;
  padding-bottom: 12px;
  display: block;
  margin: 0 auto;
}
._foot {
  height: 90px;
  border: 7px solid #f0f5f9;
  border-top: 0;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;
  text-align: center;
}
._foot a {
  display: block;
  width: 20%;
  color: #5c5c5c;
  font-size: 13px;
  text-align: center;
}
._diarynum {
  color: black;
  display: block;
  height: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
}
._diarydiv {
  color: #5c5c5c;
  font-size: 12px;
}
._diary {
  width: 100%;
  height: 80px;
  border: 7px solid #f0f5f9;
  display: flex;
  flex-flow: row no-wrap;
  box-sizing: border-box;
}
._diary a {
  display: inline-block;
  width: 20%;
}
._vip {
  margin-top: 10px;
  width: 96%;
  height: 30px;
  margin: 0 auto;
  background: #3c3d42;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
._vip a {
  color: #ddc2bd;
}
._vipname {
  color: #ddc2bd;
  font-family: "YouYuan";
  font-weight: 600;
}
._vipintr {
  font-size: 12px;
  color: #baaba8;
}
._jianjie {
  text-align: left;
  width: 94%;
  margin: 0 auto;
  color: #5c5c5c;
  font-size: 13px;
  padding-left: 7px;
  margin-bottom: 10px;
}

._kongbai {
  height: 10px;
}

.container {
  margin: 0;
  padding: 0;
  margin-top: 40px;
  width: 100%;
}

._photo-name {
  margin: 0 auto;
  width: 90%;
  height: 95px;
  margin-top: -18px;
  text-align: left;
  position: relative;
}
._h_name {
  padding-top: 5px;
  width: 50%;
  display: inline-block;
  margin-left: 15px;
  box-sizing: border-box;
  text-align: left;
  padding-top: 22px;
  position: absolute;
  left: 87px;
  top: 10px;
}
._h_name_a {
  color: #808080;
  font-size: 12px;
}
._h_name_b {
  color: #808080;
  font-size: 12px;
}
._h_name_name {
  padding-top: 5px;
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 10px;
  margin-top: -5px;
}
._h_name_img {
  display: inline;
  padding-bottom: 1px;
  margin-left: 4px;
}
._h_photo {
  display: inline-block;
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 50%;
  margin-top: -10px;
  position: absolute;
  left: -4px;
  top: 10px;
  overflow: hidden;
}
._h_photo img {
  width: 90px;
  height: 90px;
}
.header {
  width: 100%;
  background: linear-gradient(to right, #50a0f5, #5587f8);
}
._bj {
  width: 100%;
  height: 20px;
  margin-top: -1px;
  background: linear-gradient(to right, #50a0f5, #5587f8);
}
</style>
<script>
export default {
  data() {
    return {
      gundong: "0",
      add: "",
      tabbar: "me",
      username: "",
      jianjie: "",
      isvip: "1",
      rijinum: "",
      guanzhunum: "",
      fensinum: "",
      zannum: "",
      hudongnum: "",
      islogined: "0",
      head_portrait: "",
      // 用户所有信息
      userorder: {},
    };
  },
  watch: {
    tabbar() {
      if (this.tabbar == "index") {
        this.$router.push("/");
      }
    },
  },
  methods: {
    to_order() {
      // this.$router.push('/orderdetails')
    },
    routerData() {
      this.$router.push("/my_homepage");
    },
    dialog() {},
    handleScroll() {
      let scrollY = document.documentElement.scrollTop;
      if (scrollY < 65) {
        this.gundong = "0";
      } else {
        this.gundong = "1";
      }
    },
    turnData() {
      this.$router.push("/data?path=recommend");
    },
    set() {
      this.$router.push("/set");
    },
    toShoppingCar() {
      this.$router.push("/shopping_car?path=recommend");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if (window.localStorage.getItem("islogined") == 0) {
      // 如果没有登陆 弹窗提示去登录
      this.$dialog
        .alert({
          title: "你还没有登录!", //加上标题
          message: "是否去登录", //改变弹出框的内容
          showCancelButton: true, //展示取消按钮
        })
        .then(() => {
          //点击确认按钮后的调用
          // console.log("点击了确认按钮");
          this.$router.push("/login");
        })
        .catch(() => {
          //点击取消按钮后的调用
          // console.log("点击了取消按钮噢");
        });
    }
    this.islogined = localStorage.getItem("islogined");
    if (this.islogined == 1) {
      this.userorder = JSON.parse(window.localStorage.getItem("user_info"));
      // console.log(this.userorder)
      this.head_portrait = this.userorder.head_portrait;
      // console.log(this.head_portrait)
      this.username = this.userorder.uname;
      // console.log(this.username)
      this.jianjie = this.userorder.u_jianjie;
      // console.log(this.head_portrait)
    }
  },
};
</script>