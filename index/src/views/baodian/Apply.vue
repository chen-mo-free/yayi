<template>
  <div>
    <div>
      <mt-header title="认证申请" class="root" fixed>
        <router-link slot="left" to="/set">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="dbu">
      <img src="http://127.0.0.1:3000/img/_zcc/can_dbu.png" alt="" />
    </div>
    <div class="zhongj">
      <div>
        <p>达人认证</p>
        <p>在神州行社区持续贡献优质内容的创作者</p>
      </div>
    </div>
    <div style="margin-top:30px" class="zhongj">
      <div>
        <p>专业用户</p>
        <p>对美业某一领域有资深了解的用户</p>
      </div>
    </div>
    <div style="margin-top:30px" class="zhongj">
      <div>
        <p>一声认证</p>
        <p>有行医资质的专业医生</p>
      </div>
    </div>
    <div style="margin-top:30px" class="zhongj">
      <div>
        <p>品牌厂家认证</p>
        <p>业内护肤、彩妆盒药械品牌厂家认证</p>
      </div>
    </div>
    <div class="dibu">
        <img src="http://127.0.0.1:3000/img/_zcc/can_dib.png" alt="">
    </div>
  </div>
</template>
<style scoped>
.root {
  color: #000000;
  background: #ffffff;
}
.dbu > img {
  width: 100%;
  margin-top: 40px;
}
.zhongj {
  width: 90%;
  margin-left: 5%;
  height: 40px;
}
.zhongj>div>:first-child{
    margin-top: 15px;
}
.zhongj>div>:nth-child(2){
    font-size: 13px;
    color: #999999;
    margin-top: 5px;
}
.dibu>img{
    width: 100%;
}
</style>>