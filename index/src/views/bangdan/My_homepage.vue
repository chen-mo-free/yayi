<template>
  <div class="home_all">
    <!-- 顶部导航开始 -->
    <div class="home_page">
      <mt-header class="home_header" fixed>
        <router-link slot="left" to="/recommend">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right">
          <van-cell class="home_right" @click="showShare = true">
            <img src="http://127.0.0.1:3000/img/_liu/liu_share.png">
          </van-cell>
        </mt-button>
      </mt-header>
      <van-share-sheet v-model="showShare" title="分享到" :options="options" @select="onSelect" style="margin-bottom:-1px;"></van-share-sheet>
    </div>
    <!-- 顶部导航结束 -->
    <!-- 头像部分开始 -->
    <div class="home_part_two">
      <div>
        <img class="home_touxiang" src="http://127.0.0.1:3000/img/_liu/liu_touxiang.jpeg">
        <div class="home_name">
          <p v-if="uname" style="margin-bottom:5px;">{{uname}}</p>
          <p v-else>还没有昵称哦</p>
          <router-link to="/my_homepage">
            {{sex==0?'男':(sex==1?'女':'保密')}}
            <img src="http://127.0.0.1:3000/img/_liu/liu_wirte.png">
            <span>解锁体验馆></span>
          </router-link>
        </div>
      </div>
      <!-- 头像部分结束 -->
      <!-- 个性签名开始 -->
      <p class="home_title">{{jianjie}}</p>
      <!-- 个性签名结束 -->
      <!-- 关注 粉丝  赞 开始 -->
      <div class="home_middle">
        <!-- 关注 -->
        <div>
          <p class="middle_one">0</p>
          <p class="middle_two">关注</p>
        </div>
        <!-- 粉丝 -->
        <div>
          <p class="middle_one">0</p>
          <p class="middle_two">粉丝</p>
        </div>
        <!-- 赞 -->
        <div>
          <p class="middle_one">0</p>
          <p class="middle_two">赞与收藏</p>
        </div>
      </div>
    </div>
    <!-- 关注 粉丝  赞 结束 -->
    <!-- 日记  喜欢 开始 -->
    <div class="home_part_three">
      <van-tabs v-model="active">
        <van-tab title="日记" v-if="active==1"></van-tab>
        <van-tab class="home_diary_two" title="日记" v-else>
          <van-empty class="custom-image" description="主人还没有任何图片哦~"/>
        </van-tab>
        <van-tab class="home_love_one" title="喜欢" v-if="active==2"></van-tab>
        <van-tab class="home_love_two" title="喜欢" v-else>
          <van-empty class="custom-image" description="主人还没有任何图片哦~"/>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 日记  喜欢 结束 -->
  </div>
</template>
<style scoped>
.home_all {
  background-color: #f5f9f8;
}
/*顶部导航*/
.home_page {
  width: 100%;
  height: 60px;
  background-image: url("http://127.0.0.1:3000/img/_liu/liu_my_home_page.png");
}
.home_pagetwo {
  background-color: #1cd9c8;
}
/*顶部按钮*/
.home_header {
  background-color: transparent;
  padding-right: 0;
}
.home_header img {
  width: 25px;
  height: 25px;
  color: #fff;
}
.home_right {
  background-color: transparent;
}
/*头像*/
.home_part_two {
  background-color: #fff;
}
.home_touxiang {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-top: -12px;
  margin-left: 30px;
}
/*头像后文本*/
.home_name {
  display: inline-block;
  margin-left: 10px;
}
.home_name > p {
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 600;
}
.home_name > a {
  font-size: 14px;
  color: #8a8a8a;
}
.home_name > a > img {
  width: 16px;
  height: 16px;
}
.home_name > a > span {
  letter-spacing: 1px;
}
/*个性签名*/
.home_title {
  font-size: 15px;
  color: #535353;
  margin-left: 25px;
}
/*关注 粉丝 赞*/
.home_middle {
  width: 100%;
  height: 40px;
  margin-top: 30px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.middle_one {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  padding-bottom: 5px;
}
.middle_two {
  color: #646464;
  font-size: 14px;
}
/*日记  喜欢*/
.home_part_three {
  margin-top: 10px;
}
/*动态*/
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
.van-empty__image img {
  border-radius: 50% !important;
  width: 200px;
}
.custom-image {
  height: 400px !important;
}
</style>
<style>
.van-tab--active {
  color: #000 !important;
  font-weight: 600 !important;
  /* line-height:20 !important; */
  margin-top: 10px;
}
.van-tabs__line {
  background-color: #9ce2df !important;
}
.van-tab__text {
  font-size: 18px;
}
</style>

<script>
export default {
  data() {
    return {
      active: 0,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "QQ", icon: "qq" },
        { name: "复制链接", icon: "link" }
      ],
      uname:'',
      jianjie:'',
      sex:0,
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    }
  },mounted(){
    this.uname=localStorage.getItem('user_info').uname
    console.log(this.uname)
    this.jianjie=localStorage.getItem('user_info').u_jianjie
    this.sex=localStorage.getItem('user_info').sex

  }
};
</script>

