<template>
  <div class="order">
    <div>
      <!-- 头部样式开始 -->
      <div class="top_nav">
        <div class="top_nav_return">
          <router-link to="/">
            <span>
              <img src="http://127.0.0.1:3000/img/_wyx/xin_return.png" alt="" />
            </span>
          </router-link> 
          <span> 取消订单 </span>
        </div>
        <div class="top_nav_second">
          <div>等待付款</div>
          <div>等待付款时间<van-count-down :time="times"  class="count"/></div>
        </div>
      </div>
      <!-- 头部样式结束 -->
      <div>
        <div class="commodity_news">
          <div class="commodity_news_content">
            <img :src="`{{http://127.0.0.1:3000/img/server_img/${messageArr.goods_img}}}`" alt="" />
            <div class="commodity_news_content_right">
              <div>
                【{{messageArr.goods_name}}】
                <span>x{{messageArr.goods_num}}</span>
              </div>
              <span>闪电退</span>
              <span>过期退</span>
              <span>术后保障</span>
              <div>新氧价¥{{messageArr.prepay}}</div>
            </div>
          </div>
          <div class="commodity_news_price">
            <span
              >预约金:¥
              <span>{{messageArr.prepay}}</span>
            </span>
            <span
              >到院再付:¥
              <span>{{d}}</span>
            </span>
          </div>
        </div>

        <!-- /* 赠品模块开始 */ -->
        <div class="middle_freebie">
          <span>赠</span>
          <span>【红蓝光祛痘】&nbsp红蓝光祛痘+针清&nbsp清洁控油&nbsp去</span>
        </div>
        <!-- 赠品模块结束-->
        <!-- 适配商家开始 -->
        <div class="phone">
          <div @click="click">
            查看适用商家<img src="http://127.0.0.1:3000/img/_wyx/xin_merchant_more.png" alt="" />
          </div>
          <div class="merchant_location" v-if="show == true">
            <div>
              <div>济南吉芙医疗美容</div>
              <div class="merchant_location_icon">
                <span><img src="http://127.0.0.1:3000/img/_wyx/xin_phone.png" alt="" /></span>
                <span><img src="http://127.0.0.1:3000/img/_wyx/xin_message.png" alt="" /></span>
              </div>
            </div>
            <div>
              <span>
                <img src="http://127.0.0.1:3000/img/_wyx/xin_location.png" alt="" />
              </span>
              <span>地址............</span>
            </div>
          </div>
        </div>
        <!-- 适配商家结束 -->
        <!-- 订单信息开始  -->
        <div class="order_messages">
          <div>
            <div class="order_messages_head">订单信息</div>
            <div>
              <span>订单总金额(预约金+尾款)</span>
              <span>¥{{messageArr.total_amount}}</span>
            </div>
            <div>
              <span>预约金</span>
              <span>¥{{messageArr.prepay}}</span>
            </div>
            <div>
              <span>实付预约金</span>
              <span>¥{{messageArr.prepay}}</span>
            </div>
            <div>
              <span>实付金额(预约金)</span>
              <span>¥{{messageArr.prepay}}</span>
            </div>
          </div>
        </div>
        <div class="order_footer">
          <div>
            <div>
              <span>订单编号:</span>
              <div>
                <span class="order_footer_number">{{messageArr.order_sn}}</span>
                <span class="copy_button">复制</span>
              </div>
            </div>
            <div class="order_footer_time">
              <span>下单时间:</span>
              <span>¥{{this.time}}</span>
            </div>
            <div>
              <div>
                <span>预约金:</span>
                <span>¥{{messageArr.prepay}}</span>
              </div>
              <router-link to="/" class="pay_button">
                <span>去付款</span>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 订单信息结束  -->
      </div>
    </div>
  </div>
</template>
<style>
/* 头部样式开始 */
.order {
  letter-spacing: 0.5px;
}
.order .top_nav_return {
  width: 100%;
  background-image: url(http://127.0.0.1:3000/img/_wyx/xin_orderDetasilBackimg.png);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 3% 4%;
  box-sizing: border-box;
  position: fixed;
}
.order .top_nav_return > a>span > img {
  width: 20px;
  height: 20px;
}
.order .top_nav_return > span:nth-child(2) {
  float: right;
}
.order .top_nav_second {
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(http://127.0.0.1:3000/img/_wyx/xin_orderDetasilBackimg.png);
  padding: 15% 0 5% 10%;
  box-sizing: border-box;
}
.order .top_nav > div > div {
  color: #fff;
}
.order .top_nav_second > div:nth-child(1) {
  margin-bottom: 20px;
}
.order .top_nav > div > div:nth-child(1) {
  font-size: 1.5rem;
  font-weight: 400;
}
.count{
  color:#fff !important;
  display: inline;
  margin-left: 1%;
}
/* 头部样式结束 */
/* 订单内容开始 */
.order .commodity_news {
  width: 90%;
  margin: 10px auto 0;
}
.order .commodity_news_content {
  display: flex;
}
.order .commodity_news_content > img {
  width: 28%;
  height: 28%;
  border-radius: 10px;
  margin-right: 10px;
}
.order .commodity_news_content_right span,
.order .commodity_news_content_right div:last-child {
  color: #797979;
  font-weight: 600;
  margin-top: 5%;
}
.order .commodity_news_content_right div:first-child {
  line-height: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis; /*省略号有兼容性问题*/
  display: -webkit-box; /*省略号有兼容性问题*/
  -webkit-line-clamp: 2; /*省略号有兼容性问题*/
  -webkit-box-orient: vertical; /*省略号有兼容性问题*/
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 1rem;
}
.order .commodity_news_content_right span {
  border-radius: 15px;
  background-color: #f1f1f1;
  padding: 5px;
  font-size: 0.8rem;
  margin-left: 10px;
}
.order .commodity_news_content_right span:nth-child(2) {
  margin-left: 0;
}
.order .commodity_news_content_right div:last-child {
  font-size: 0.9rem;
}
.order .commodity_news_price {
  float: right;
  margin-top: 30px;
}
.order .commodity_news_price > span {
  color: #797979;
}
.order .commodity_news_price > span > span {
  color: #000;
}

/* 订单内容结束 */
/* 赠品模块开始 */
.order .middle_freebie {
  width: 90%;
  margin: 20% auto 0;
  clear: right;
  overflow: hidden;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  padding: 10px;
}
.order .middle_freebie > span:nth-child(1) {
  display: inline-block;
  background-color: #0fd0c0;
  padding: 3px;
  border-radius: 5px;
  color: #fff;
  clear: right;
  font-size: 12px;
  font-weight: 300;
}
/* 赠品模块结束 */
/* 适配商家开始 */
.order .phone {
  width: 90%;
  margin: 20px auto 0;
  text-align: center;
  color: #6a6a6a !important;
}
.order .merchant_location > div {
  display: flex;
  flex-wrap: nowrap;
}
.order .merchant_location > div:nth-child(1) {
  justify-content: space-between;
  margin-top: 4%;
}
.order .merchant_location > div:nth-child(1)>div:nth-child(1){
  padding:2% 0;
}
.order .merchant_location_icon span {
  display: inline-block;
  background-color:#E5FBF5;
  margin-left: 30px;
  border-radius: 50%;
  padding: 2px;
}
.order .merchant_location_icon span > img {
  width: 25px;
  height: 25px;
}
.order .merchant_location_icon span:nth-child(1) {
  margin-left: 0;
}
.order .merchant_location > div:nth-child(2) {
  color: #767676;
}
/* 适配商家结束 */
/* 订单信息开始 */
.order .order_message {
  width: 100%;
  background-color: #fff;
}
.order .order_messages > div div:not(:first-child) {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 10px;
}
.order .order_messages > div div {
  padding: 0 2%;
}
.order .order_messages > div div:nth-child(1) {
  margin: 20px 0 30px 0;
  font-weight: 600;
}
.order .order_messages > div div:nth-child(3),
.order .order_messages > div div:nth-child(4) {
  background-color: #f3f3f3;
  padding: 10px;
  width: 96%;
  border-radius: 10px;
  margin: 0 auto;
  box-sizing: border-box;
}
.order .order_messages > div div:nth-child(3) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-top: 10px;
}
.order .order_messages > div div:nth-child(4) {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
/* 订单信息结束 */
/* 页脚开始 */
.order .order_footer {
  background-color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  /* font-family: "	汉仪旗黑-55S Regular"; */
  margin-top: 1rem;
}
.order .order_footer > div > div {
  width: 90%;
  margin: 3% auto;
  display: flex;
  justify-content: space-between;
}
.order .order_footer_number {
  margin-right: 1rem;
}
.order .copy_button {
  border: 0.05rem solid #adadad;
  border-radius: 15px;
  text-align: center;
  padding: 0.3rem 0.7rem;
  box-sizing: border-box;
}
.order .order_footer_time {
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 5%;
}
.order .order_footer > div > div:not(:nth-child(3)) {
  color: #777;
}
.order .order_footer > div > div:nth-child(3) > div span {
  display: inline-block;
  margin-top: 1rem;
}
.order .order_footer > div > div:nth-child(3) > div span:nth-child(2),
.order .order_messages > div > div:nth-child(5) span:nth-child(2) {
  font-size: 1.1rem;
  color: #e04040;
}
.order .pay_button {
  background-color: #fe4042;
  color: #fff;
  border-radius: 30px;
  padding: 0.8rem 2rem;
  box-sizing: border-box;
  font-size: 1rem;
}
/* 页脚结束 */
</style>
<script>
export default {
  data() {
    return {
      show: false,
      messageArr:"",
      time:"",
      d:'',
      pirce:"",
      times: 24 * 60 * 60 * 1000
    };
  },
  mounted(){
    this.axios.get('/orderdetails').then(res=>{
      let dataString=JSON.stringify(res.data.results);
      let moredata=JSON.parse(dataString);
      this.messageArr=moredata[0];
      let a=new Date(this.messageArr.add_time);
      this.time=a.toLocaleString();
      this.d=this.messageArr.total_amount-this.messageArr.prepay;
    })
  },
  methods: {
    click(){
      if (this.show == true) {
        this.show = false;
      } else if (this.show == false) {
        this.show = true;
      }
    },
  },
};
</script>