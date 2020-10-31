<template>
  <div>
    <div>
      <mt-header title="实名认证" class="root" fixed>
        <router-link slot="left" to="/account">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div>
      <div class="set">
        <div>旧密码</div>
        <div>请输入您的旧密码</div>
      </div>
      <div class="set1">
        <div>新密码</div>
        <div>请输入您的新密码</div>
      </div>
      <div class="set2">
          <span>继续表示同意</span>
          <span>用户协议及隐私条款</span>
      </div>
    </div>
    <div class="button">开始认证</div>
  </div>
</template>
<style scoped>
.root {
  color: #000000;
  background: #ffffff;
}
.set {
  width: 90%;
  display: flex;
  height: 50px;
  /* background: black; */
  margin-left: 19px;
  display: flex;
  line-height: 50px;
  border-bottom: 1px solid #e7e7e7;
  margin-top: 40px;
}
.set>:first-child{
  font-size: 15px;
}
.set>:nth-child(2){
  color: #999999;
  font-size: 14px;
  margin-left: 60px;
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
.set1>:first-child{
  font-size: 15px;
}
.set1>:nth-child(2){
  color: #999999;
  font-size: 14px;
  margin-left: 60px;
}
.set2{
    font-size: 10px;
    margin-top: 15px;
    margin-left: 19px;
}
.set2>:nth-child(2){
    color: #9afff3;
}
.button{
    width: 95%;
    height: 35px;
    background-color: #DEDEDE;
    margin-left: 2.5%;
    border-radius: 25px;
    margin-top: 30px;
    text-align: center;
    line-height: 35px;
    color: #ffffff;
}

</style>>