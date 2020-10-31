<template>
  <div class="app">
    <mt-header title="账户与安全" class="root" fixed>
      <router-link slot="left" to="/set">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <div class="set" @click="amend">
        <div>手机号</div>
        <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
      </div>
      <div class="set1" @click="pass">
        <div>修改密码</div>
        <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
      </div>
      <div class="set1" @click="autonym">
        <div>实名认证</div>
        <img src="http://127.0.0.1:3000/img/_zcc/can_return.png" alt="" />
      </div>
      <div class="set2"></div>
      <div class="set1" @click="cancel">
        <div>账户注销</div>
        <div id="add">账户注销后无法回复</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.root {
  color: #000000;
  background: #ffffff;
}
.set{
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
.set1{
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
.set>div,.set1>div{
    font-size: 14px;
}
.set>img,.set1>img{
    width: 20px;
    height: 20px;
    margin-top: 15px;
}
.set2{
    width:100%;
    height: 5px;
    background: #F2F6F7;
}
#add{
    font-size: 13px;
    color: #999999;
}
</style>
<script>
export default {
    methods:{
        amend(){
            this.$router.push('/amend')
        },
        pass(){
          this.$router.push('/pass')
        },
        autonym(){
          this.$router.push('/autonym')
        },
        cancel(){
          this.$router.push('/cancel')
        }
    },
}
</script>>