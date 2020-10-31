<template>
  <div>
    <div class="bag">
      <div id="imgBgc">


        <div class="login">
          <div>
            <!-- 顶部导航开始 -->
            <mt-header title="登录" class="login_top" fixed>
              <router-link to="/recommend" slot="left">
                <mt-button icon="back"></mt-button>
              </router-link>
              <router-link to="/register" slot="right"> 注册 </router-link>
            </mt-header>
            <!-- 顶部导航结束 -->
          </div>

          <div class="login_text">
            <mt-field
              type="text"
              label="用户名"
              placeholder="请输入用户名"
              :attr="{ maxlength: 15 }"
              v-model="username"
              @blur.native.capture="checkUsername"
              :state="usernameState"
            >
            </mt-field>
            <mt-field
              type="password"
              label="密码"
              placeholder="请输入密码"
              :attr="{ maxlength: 20, autocomplete: 'off' }"
              v-model="password"
              @blur.native.capture="checkPassword"
              :state="passwordState"
            >
            </mt-field>
            <mt-button
              type="primary"
              size="large"
              @click="handle"
              class="loging"
              >快速登录</mt-button
            >
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<style>

</style>
<style lang="scss" scoped>
.login_text .mint-field .mint-cell-wrapper .mint-cell-value .mint-field-core{
  background-color: transparent;
}
a {
  text-decoration: none;
}
.login{
  position: fixed;
  left: 0;
  right: 0;
  padding-top: 40px;
  height: 1000px;
  background-color: rgba(0,0,0,.2);
}
.login_top {
  background-color: transparent;
  font-size: 16px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.mint-field {
  background-color: transparent;
  background-color: rgba(255, 255, 255,.5);
  border-radius: 25px;
  margin: 50px 30px;
}
.loging {
  position: fixed;
  border-radius: 20px;
  width: 50%;
  margin: 0 25%;
  background-color: rgba(0,0,0,0.5);
}
@-webkit-keyframes scrollToUp {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -1000px; // 向上滚动则就是图片的高度的负值，否则为图片的宽度，也可以百分比
  }
}
@keyframes scrollToUp {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -258px;
  }
}

#imgBgc {
  height: 1000px;
  background-image: url("http://127.0.0.1:3000/img/_cjs/log.png"); /* 什么图片都可以*/
  background-attachment: fixed; /* 让背景图片和文本脱离*/
  background-position: center center;
  -webkit-animation: scrollToUp 5s linear infinite; /* 引入 scrollToUp动画  linear 表示匀速执行动画可避免卡顿*/
  animation: scrollToUp 5s linear infinite;
}
</style>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      conpassword: "",
      usernameState: "",
      passwordState: "",
    };
  },
  methods: {
    checkUsername() {
      let usernameRegExp = /^[0-9a-zA-Z_]{6,20}$/;
      if (usernameRegExp.test(this.username)) {
        this.usernameState = "success";
        return true;
      } else {
        this.usernameState = "error";
        this.$toast({
          message: "用户名格式不符",
          position: "top",
          duration: "2000",
        });
        return false;
      }
    },
    checkPassword() {
      let passwordRegExp = /^[0-9a-zA-Z]{8,20}$/;
      if (passwordRegExp.test(this.password)) {
        this.passwordState = "success";
        return true;
      } else {
        this.passwordState = "error";
        this.$toast({
          message: "密码格式不符",
          position: "top",
          duration: "2000",
        });
        return false;
      }
    },
    handle() {
      if (this.checkUsername() && this.checkPassword()) {
        let obj = {
          username: this.username,
          password: this.password,
        };
        this.axios.post("/login", this.qs.stringify(obj)).then((res) => {
          if (res.data.code == 1) {
            this.$router.push("/recommend");
            window.localStorage.setItem("islogined", "1");
            // console.log(res.data.info)
            let i=JSON.stringify(res.data.info)
            window.localStorage.setItem('user_info',i)
            window.localStorage.setItem('user',this.username)
          } else {
            this.$messagebox("登录提示", "用户名或密码错误");
          }
        });
      }
    },
  },
};
</script>