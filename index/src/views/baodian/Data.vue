<template>
  <div>
    <mt-header title="个人资料" class="roof" fixed>
        <mt-button @click="data_turnback()" slot="left" icon="back"></mt-button>
    </mt-header>
    <div @click="showPopup" class="dingbu1">
      <div>头像</div>
      <div class="imgdiv">
        <img :src="`http://127.0.0.1:3000/img/_bo/home_img/${head_portrait}`" alt="" />
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '15%' }">
      <div class="a1">传照片</div>
      <div class="a2">拍照</div>
      <div class="a2" @click="abcd">取消</div>
    </van-popup>
    <div @click="updateuname()" class="dingbu2">
      <div>昵称</div>
      <div v-if="this.uname==''">去设置昵称</div>
      <div v-else>{{this.uname}}</div>
    </div>
    <div class="dingbu2">
      <div>性别</div>
      <div>{{this.sex}}</div>
    </div>
    <div class="dingbu2">
      <div>生日</div>
      <div>2000-01-01</div>
    </div>
    <div class="dingbu2">
      <div>居住地</div>
      <div>{{dizhi}}</div>
    </div>
    <div class="dingbu2" @click="turn">
      <div>个人简介</div>
      <div v-if="!this.jianjie">这个人很懒~还没有简介</div>
      <div v-else>{{jianjie}}</div>
    </div>
  </div>
</template>
<style scoped>
.mint-header-title {
  font-size: 17px;
  font-weight: 600;
}
.roof {
  color: #815e5e !important;
}
.mint-header.is-fixed {
  background-color: #ffffff;
}
.dingbu1 {
  margin-top: 40px;
  width: 90%;
  height: 40px;
  /* border: 1px solid #000000; */
  margin-left: 18px;
  display: flex;
  line-height: 40px;
  justify-content: space-between;
}
.imgdiv {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.imgdiv > img {
  width: 40px;
  height: 40px;
}
.dingbu2 {
  width: 90%;
  height: 40px;
  /* border: 1px solid #000000; */
  display: flex;
  margin-left: 18px;
  line-height: 40px;
  justify-content: space-between;
}
.dingbu2 > :nth-child(2) {
  font-size: 12px;
  color: #373134;
}
.a1 {
  width: 100%;
  height: 25px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.a2 {
  width: 100%;
  height: 25px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  margin-top: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      show: false,
      userorder:{},
      head_portrait:'',
      uname:'',
      sex:'',
      birthday:'',
      dizhi:'',
      jianjie:''
    };
  },

  methods: {
    updateuname(){
      this.$router.push('/updateuname')
    },
    showPopup() {
      this.show = true;
    },
    abcd() {
      this.show = false;
    },
    turn(){
      this.$router.push('/updatejj')
    },
    data_turnback(){
      // let i=location.search.slice(1) 
      // i=i.split('=')[1]
      // // console.log(i)
      // this.$router.push(i)
      // if(!i){
        this.$router.push('/recommend')
      // }
    }
  },
  mounted(){
    this.userorder=JSON.parse(localStorage.getItem('user_info'))
    // console.log(this.userorder)
    this.dizhi=localStorage.getItem('name')
    this.head_portrait=this.userorder.head_portrait
    this.uname=this.userorder.uname
    this.jianjie=this.userorder.u_jianjie
    if(this.userorder.sex==1){
      this.sex='男'
    }else if(this.userorder.sex==2){
      this.sex='女'
    }else{
      this.sex='保密'
    }
  }
};
</script>