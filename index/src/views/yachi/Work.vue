<template>
  <div>
    <mt-header fixed class="to_1">
      <router-link slot="left" to="/">
        <mt-button icon="back"></mt-button>           
      </router-link>
      <div slot="right">
        <mt-button icon="more" type="primary">
          <img src="../../assets/cart_enabled.png" slot="icon" />
        </mt-button>
      </div>
    </mt-header>
    <!-- 图开始 -->
    <div>
      <img class="tu" src="../../assets/123.jpg" alt="" />
    </div>
    <!-- 图结束 -->
    <div class="jiag">
      <div class="da_div">
        <div>
          <p><span class="p_span_1">¥</span><span class="p_span_2">68</span></p>
          <p><span>门市价</span><span class="kanjia">¥120</span></p>
        </div>
        <div class="jianjia">
          <div>
            <div><img class="div_img_1" src="../../assets/lin.png" /></div>
            <p class="div_p">降价通知</p>
          </div>
          <div>
            <div><img class="div_img_2" src="../../assets/xin.png" /></div>
            <p class="div_a">收藏</p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="da_div">
        <p class="xinqin">
          【超声波洗牙】超声波洁牙|洗掉牙结石牙菌斑/牙色素深层清洁还原健康
        </p>
      </div>
      <!--  -->
      <div class="jinan">
        <div>济南市</div>
        <div>新品上架</div>
      </div>
    </div>
    <!-- 商品导航开始 -->
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="contact" text="面诊" />
        <van-goods-action-icon icon="phone-o" text="电话" />
        <van-goods-action-icon icon="chat-o" text="咨询" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
    <!-- 商品导航结束 -->
  </div>
</template>
<style scoped>
.to_1{
  background: rgba(0, 0, 0, 0.1);
}
.tu {
  width: 375px;
  height: 490px;
}
.van-goods-action-icon {
  font-size: 15px;
}
.jiag {
  padding: 10px;
  height: 125px;
  width: 375px;
  box-sizing: border-box;
}
.jiag > div:first-child {
  display: flex;
  justify-content: space-between;
}
.jianjia {
  display: flex;
  justify-content: space-between;
}
.div_p {
  font-size: 14px;
}
.div_a {
  font-size: 14px;
  margin-left: 5px;
}
.div_img_1 {
  margin-left: 15px;
  margin-bottom: 10px;
}
.div_img_2 {
  margin-bottom: 10px;
  margin-left: 5px;
}
.jinan {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.da_div {
  margin-bottom: 12px;
}
.p_span_1 {
  color: red;
  font-size: 15px;
}
.p_span_2 {
  color: red;
  font-size: 25px;
}
.xinqin {
  font-weight: bold;
}
.kanjia {
  text-decoration: line-through;
}
</style>
<script>
import { Toast } from "vant";

export default {
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
  },
};
</script>