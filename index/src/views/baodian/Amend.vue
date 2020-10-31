<template>
  <div>
    <mt-header title="修改手机号码" class="root" fixed>
      <router-link slot="left" to="/account">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="lv">
      <p>15588067470</p>
      <p>当前手机号码</p>
    </div>
    <div class="set">
      <div>
        +86
        <img src="http://127.0.0.1:3000/img/_zcc/can_xiala.png" alt="" />
      </div>
      <div>请输入新的手机号码</div>
      <div style="color: #7ffaec">获取验证码</div>
    </div>
    <div class="set1">
      <div>验证码</div>
      <div>请输入验证码</div>
    </div>
    <div class="button">确认</div>
  </div>
</template>
<style scoped>
.root {
  color: #000000;
  background: #ffffff;
}
.lv {
  margin-top: 40px;
  width: 100%;
  height: 80px;
  background-color: #d2ece9;
  /* line-height: 80px; */
}
.lv > :nth-child(1) {
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  padding-top: 25px;
}
.lv > :nth-child(2) {
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}
.set {
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
.set1 {
  width: 90%;
  display: flex;
  height: 50px;
  /* background: black; */
  margin-left: 19px;
  display: flex;
  line-height: 50px;
  border-bottom: 1px solid #e7e7e7;
}
.set > div,
.set1 > div {
  font-size: 14px;
}
.set > img,
.set1 > img {
  width: 20px;
  height: 20px;
  margin-top: 15px;
}
.set1 > :nth-child(2) {
  margin-left: 50px;
  color: #bfbfc1;
}
.set > :nth-child(2) {
  color: #bfbfc1;
}
.button{
    width: 95%;
    height: 35px;
    background-color: #DEDEDE;
    margin-left: 2.5%;
    border-radius: 25px;
    margin-top: 20px;
    text-align: center;
    line-height: 35px;
    color: #ffffff;
}
</style>