<template>
  <div>
    <mt-header title="设置" class="rooq" fixed>
      <router-link slot="left" to="/recommend">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="set" @click="data">
      <div>个人资料</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1" @click="account">
      <div>账户与安全</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1" @click="apply">
      <div>新氧认证</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1" @click="privacy">
      <div>隐私设置</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1">
      <div>帮助与客服</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1">
      <div>联系我们</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1">
      <div>客服电话</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1">
      <div>去App Stpre评分</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1">
      <div>关于新氧</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1">
      <div>清除缓存</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div class="set1">
      <div>检查更新</div>
      <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
    </div>
    <div @click="onClick" class="set2">
      <div>退出当前账号</div>
    </div>
  </div>
</template>
<style scoped>
.mint-header.is-fixed {
  background: #ffffff;
  color: #000000;
}

.set {
  width: 90%;
  display: flex;
  height: 50px;
  /* background: black; */
  margin-top: 40px;
  margin-left: 19px;
  display: flex;
  line-height: 50px;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
}
.set > div,
.set1 > div,
.set2 > div {
  font-size: 14px;
}
.set > img,
.set1 > img {
  width: 20px;
  height: 20px;
  margin-top: 15px;
}
.set1 {
  width: 90%;
  display: flex;
  height: 50px;
  /* background: black; */
  margin-left: 19px;
  display: flex;
  line-height: 50px;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
}
.set2 {
  text-align: center;
  line-height: 40px;
}
</style>
<script>
export default {
  methods: {
    onClick() {
      // 如果点击退出后 提示
      this.$dialog
        .alert({
          title: "你正在进行注销操作!", //加上标题
          message: "是否退出登录", //改变弹出框的内容
          showCancelButton: true, //展示取消按钮
        })
        .then(() => {
          //点击确认按钮后的调用
          // console.log("点击了确认按钮");
          this.$router.push(`/recommend`);
          //   清除登录状态
          window.localStorage.setItem("islogined", "0");
          //   清除保存的用户名
          window.localStorage.removeItem("user");
          // 清除保存的用户信息
          window.localStorage.removeItem("user_info");
          // 清除保存的商品信息
          window.localStorage.removeItem('info')
        })
        .catch(() => {
          //点击取消按钮后的调用
          // console.log("点击了取消按钮噢");
        });
    },
    account() {
      this.$router.push("/account");
    },
    apply() {
      this.$router.push("/apply");
    },
    privacy() {
      this.$router.push("/privacy");
    },
    data(){
      this.$router.push('/data?path=set')
    }
  },
};
</script>>