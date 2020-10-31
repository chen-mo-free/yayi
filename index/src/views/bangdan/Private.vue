<template>
  <div class="pri">
    <!-- 顶部导航开始 -->
    <mt-header title="新氧问答君">
      <router-link slot="left" to="/recommend">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button class="pri_right" slot="right" icon="more"></mt-button>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 聊天界面开始一 -->
    <div class="pri_page">
      <span class="pri_time">10月3日下午07:00</span>
      <div class="pri_chat">
        <div class="pri_img">
          <img src="http://127.0.0.1:3000/img/_liu/liu_touxiang.jpg" />
        </div>
        <div class="pri_text">
          【千元问答红包限时派送 】
          <br />大家国庆假期有拍美美的照片吗？晒一晒你最喜欢的假期美照，【20字+照片】即可瓜分￥1000现金红包
          <br />报名速戳
          <a href="#">app.soyoung://question/ detail?questionId=365915</a>
        </div>
      </div>
    </div>
    <!-- 聊天界面结束一 -->
    <!-- 聊天界面开始二 -->
    <div class="pri_page">
      <span class="pri_time">10月3日下午07:00</span>
      <div class="pri_chat">
        <div class="pri_img">
          <img src="http://127.0.0.1:3000/img/_liu/liu_touxiang.jpg" />
        </div>
        <div class="pri_text">
          【千元问答红包限时派送 】<br />
          以下这些男明星，你觉得谁的侧颜最优越？说说你心中侧颜最能打的男明星【30字回答】即可瓜分￥1000现金红包<br />
          报名速戳
          <a href="#"
            >app.soyoung://question/ <br />
            detail?questionId=372360</a
          >
        </div>
      </div>
    </div>
    <!-- 聊天界面结束二 -->
    <!-- 底部导航开始 -->
    <div class="pri_bottom" fixed>
      <img class="bottom_first" src="http://127.0.0.1:3000/img/_liu/liu_voice.png" />
      <input type="text" />
      <img class="bottom_two" src="http://127.0.0.1:3000/img/_liu/liu_expression.png" />
      <img class="bottom_last" src="http://127.0.0.1:3000/img/_liu/liu_more.png" />
    </div>
    <!-- 底部导航结束 -->
  </div>
</template>
<style scoped>
.pri {
  height: 615px;
  background-color: #f8f8f8;
}
.mint-header {
  color: #000;
  height: 60px;
  font-size: 18px;
  background-color: white;
}
.pri_right {
  margin: 15px;
}
.pri_page {
  margin-top: 20px;
}
.pri_time {
  width: 120px;
  color: white;
  font-size: 14px;
  margin-left: 33%;
  border: 1px solid #f0f0f0;
  background-color: #f0f0f0;
  padding: 3px;
}
.pri_chat {
  display: flex;
  margin-top: 30px;
  margin-left: 20px;
}
.pri_img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.pri_img > img {
  width: 50px;
  height: 50px;
}
.pri_text {
  width: 220px;
  line-height: 20px;
  border: 1px solid #fff;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
}
.pri_text > a {
  color: rgb(32, 235, 167);
}
.pri_bottom {
  margin-top: 50px;
  /* padding: 15px; */
  display: flex;
  justify-content: space-between;
}
.pri_bottom > img {
  width: 30px;
  height: 30px;
  /* margin-top:40px;  */
}
.bottom_first {
  margin-left: 15px;
}
.bottom_two {
  margin-left: 5px;
}
.bottom_last {
  margin-right: 15px;
}
</style>
