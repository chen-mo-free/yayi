<template>
  <div>
    <div class="bag">
      <div id="imgBgc">
        <div class="register">
          <div>
            <!-- 顶部导航开始 -->
            <mt-header title="注册" class="register_top">
              <router-link to="/recommend" slot="left">
                <mt-button icon="back"></mt-button>
              </router-link>
              <router-link to="login" slot="right"> 登录 </router-link>
            </mt-header>
            <!-- 顶部导航结束 -->
            <div class="register_log"></div>
          </div>
          <div class="register_text">
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
            <mt-field
              type="password"
              label="确认密码"
              placeholder="请再次输入密码"
              :attr="{ maxlength: 20, autocomplete: 'off' }"
              v-model="conpassword"
              @blur.native.capture="checkConpassword"
              :state="conpasswordState"
            >
            </mt-field>
            <mt-button
              type="primary"
              size="large"
              @click="handle"
              class="registerg"
              :disabled="disabled == false"
              >免费注册</mt-button
            >
            <div>
              <input
                class="checkbox"
                type="checkbox"
                v-model="disabled"
              />是否同意
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.register_text
  .mint-field
  .mint-cell-wrapper
  .mint-cell-value
  .mint-field-core {
  background-color: transparent;
}
</style>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.register {
  position: fixed;
  left: 0;
  right: 0;
  height: 1000px;
  background-color: rgba(0, 0, 0, 0.3);
}
.register_top {
  background-color: transparent;
  font-size: 16px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.mint-field {
  background-color: transparent;
  width: 80%;
  margin: 40px auto;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 25px;
}
.registerg {
  width: 50%;
  margin: 0 25%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
}
.checkbox {
  margin: 10px 0 0 5px;
}
.register_text > div:last-child {
  color: #fff;
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
      conpasswordState: "",
      disabled: false,
    };
  },
  mounted() {},
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
    checkConpassword() {
      if (this.conpassword == "") {
        this.conpasswordState = "error";
        return false;
      }
      if (this.password != this.conpassword) {
        this.conpasswordState = "error";
        this.$toast({
          message: "两次密码不一致",
          position: "top",
          duration: "2000",
        });
        return false;
      } else {
        this.conpasswordState = "success";
        return true;
      }
    },
    handle() {
      let i = 0;
      if (
        this.checkUsername() &&
        this.checkPassword() &&
        this.checkConpassword()
      ) {
        this.axios
          .post(
            "/register",
            "username=" + this.username + "&password=" + this.password
          )
          .then((res) => {
            if (res.data.code == 1) {
              window.localStorage.setItem("islogined", "1");
              i++;
              window.localStorage.setItem('uname',this.username)
              if (i != 0) {
                this.axios
                  .get("/select", { params: { username: this.username } })
                  .then((res) => {
                    if (res.data.code == 1) {
                      let j = res.data.info;
                      j=JSON.stringify(j)
                      // console.log(j);
                      window.localStorage.setItem("user_info", j);
                  this.$router.push('/recommend')
                    }
                  });
              }
            } else {
              this.$messagebox("注册提示", "用户名已存在");
            }
          });
      }
    },
  },
};
</script>