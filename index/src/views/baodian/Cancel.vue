<template>
  <div>
    <div>
      <mt-header title="注销确认" class="root" fixed>
        <router-link slot="left" to="/">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="dingbu">
      <img src="http://127.0.0.1:3000/img/_zcc/can_duihao.png" alt="" />
      <span>您的账号符合注销条件</span>
    </div>
    <div class="huise"></div>
    <div class="zhu">注销提示</div>
    <div class="zit">
      <div></div>
      <span>您账号的各项信息将被清空且无法恢复</span>
    </div>
    <div style="margin-top: 10px" class="zit">
      <div></div>
      <span>您的历史合同、订单、交易记录将无法查看</span>
    </div>

    <div style="margin-top: 10px" class="zit">
      <div></div>
      <span>您获得的折扣、特权、卡卷等权益将视为自动放弃</span>
    </div>

    <div style="margin-top: 10px" class="zit">
      <div></div>
      <span>将解除与其他网站、其他APP的授权或绑定关系</span>
    </div>
    <div class="button">确认</div>
    <div class="dibu">
      <p>申请注销即表示您自愿放弃账户内所有虚拟财产</p>
      <span>并同意</span>
      <span style="color:#35CEC2">《注销须知》</span>
    </div>
  </div>
</template>
<style scoped>
.root {
  color: #000000;
  background: #ffffff;
  font-size: 16px;
}
.dingbu {
  margin-top: 70px;
  margin-left: 15px;
  font-size: 17px;
  font-weight: 600;
}
.dingbu > img {
  width: 20px;
  margin-top: -3px;
}
.dingbu > span {
  margin-left: 5px;
}
.huise {
  width: 100%;
  height: 5px;
  background: #f4f4f4;
  margin-top: 20px;
}
.zhu {
  font-size: 14px;
  color: #000000;
  margin-top: 20px;
  margin-left: 20px;
}
.zit {
  display: flex;
}
.zit > :first-child {
  width: 5px;
  height: 5px;
  background: #999999;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 20px;
}
.zit > span {
  margin-top: 9px;
  margin-left: 7px;
  font-size: 14px;
}
.button {
  width: 95%;
  height: 40px;
  background-color: #dedede;
  margin-left: 2.5%;
  border-radius: 25px;
  margin-top: 20px;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
}
.dibu>:first-child{
    font-size: 12px;
    color: #999999;
    text-align: center;
    margin-top: 8px;
}
.dibu>:nth-child(2),.dibu>:nth-child(3){
    font-size: 12px;
}
.dibu>:nth-child(2){
    margin-left: 135px;
}
</style>>