<template>
  <div class="_container">
    <mt-header class="_header" fixed title="支付订单预约金">
      <mt-button slot="left" icon="back" @click="toshopping_car()"></mt-button>
    </mt-header>
    <div class="top">
      <div class="_top-div">
        <p>￥{{ price }}</p>
        <div>
          剩余支付时间： <van-count-down class="daojishi" :time="time" />
        </div>
        <span>{{ count }}个项目预约金</span>
      </div>
      <div class="_middle-div">
        <div class="_middle-div-top"><span>请选择支付方式</span></div>
        <div class="_middle-div-middle">
          <p class="_middle-div-middle-p">
            还需支付<span>￥{{ price }}</span>
          </p>
          <div>
            <van-radio-group v-model="radio">
              <!-- 微信 -->
              <div class="_weixin">
                <!-- 放微信图 -->
                <div class="_weixin-top">
                  <img src="../../assets/home_img/weixin_logo.png" alt="" />
                </div>
                <div class="_w-left">
                  <!-- 字 -->
                  <div class="_weixin-middle">
                    <p>微信支付</p>
                    <span>亿万用户的选择，更快更安全</span>
                  </div>
                  <!-- 单选框 -->
                  <div class="_weixin-bottom">
                    <van-radio
                      @click="weixin()"
                      name="1"
                      checked-color="#6CD9CA"
                    ></van-radio>
                  </div>
                </div>
              </div>
              <!-- 支付宝 -->
              <div class="_weixin">
                <!-- 支付宝图 -->
                <div class="_weixin-top">
                  <img src="../../assets/home_img/zhifubao_logo.png" alt="" />
                </div>
                <div class="_w-left">
                  <!-- 字 -->
                  <div class="_weixin-middle">
                    <p>支付宝</p>
                    <span>支付宝安全支付</span>
                  </div>
                  <!-- 单选框 -->
                  <div class="_weixin-bottom">
                    <van-radio
                      @click="zhifubao()"
                      name="2"
                      checked-color="#6CD9CA"
                    ></van-radio>
                  </div>
                </div>
              </div>
              <!-- 花呗分期 -->
              <div class="_huabei">
                <!-- 放花呗图 -->
                <div class="_huabei-top">
                  <img src="../../assets/home_img/huabei_logo.png" alt="" />
                </div>
                <div class="_huabei-title">
                  <p>花呗分期</p>
                  <span>实际手续费以支付宝内展示为准</span>
                </div>
                <!-- 单选框 -->
                <!-- 右信息单选框 -->
                <div class="_huabei-bottom">
                  <!-- 字 -->

                  <div class="_fenqi">
                    <div>
                      <span class="price">￥{{ (price / 3).toFixed(2) }}</span
                      ><span class="price">×3期</span>
                      <span class="huise"
                        >（含手续费{{ (price * 0.008).toFixed(2) }}元/期）</span
                      >
                    </div>
                    <van-radio
                      @click="huabei1()"
                      name="3"
                      checked-color="#6CD9CA"
                    ></van-radio>
                  </div>
                  <div class="_fenqi">
                    <div>
                      <span class="price">￥{{ (price / 6).toFixed(2) }}</span
                      ><span class="price">×6期</span>
                      <span class="huise"
                        >（含手续费{{ (price * 0.01).toFixed(2) }}元/期）</span
                      >
                    </div>
                    <van-radio
                      @click="huabei2()"
                      name="4"
                      checked-color="#6CD9CA"
                    ></van-radio>
                  </div>
                  <div class="_fenqi">
                    <div>
                      <span class="price">￥{{ (price / 12).toFixed(2) }}</span
                      ><span class="price">×12期</span>
                      <span class="huise"
                        >（含手续费{{ (price * 0.02).toFixed(2) }}元/期）</span
                      >
                    </div>
                    <van-radio
                      @click="huabei3()"
                      name="5"
                      checked-color="#6CD9CA"
                    ></van-radio>
                  </div>
                </div>
              </div>
            </van-radio-group>
          </div>
        </div>
      </div>
    </div>
    <div>
      <mt-button @click="pay" class="button" type="danger" size="large"
        >确认支付</mt-button
      >
    </div>
  </div>
</template>
<style scoped>
.daojishi {
  display: inline;
  font-weight: 600;
}
._container {
  background: #f7f8fa;
  height: 691px;
  position: relative;
}
._header {
  background: white;
  color: black;
  font-weight: 600;
  font-size: 16px;
}
.top {
  margin-top: 40px;
  background: #f7f8fa;
  padding-top: 5px;
  margin-bottom: 40px;
}
._top-div {
  width: 96%;
  height: 121px;
  background: white;
  margin-left: 2%;
  text-align: center;
}
._top-div p {
  font-size: 28px;
  padding-top: 15px;
  padding-bottom: 10px;
}
._top-div div {
  margin: auto auto;
  width: 48%;
  font-weight: 500;
  font-size: 13px;
  background: #f4f4f4;
  height: 26px;
  box-sizing: border-box;
  padding-top: 5px;
  border-radius: 20px;
  margin-bottom: 13px;
}
._top-div div span {
  font-weight: 600;
  font-size: 14px;
}
._top-div > span {
  color: #909090;
  font-size: 14px;
}
._middle-div {
  width: 96%;
  margin-left: 2%;
  text-align: left;
  margin-top: 23px;
}
._middle-div-top {
  padding-left: 3%;
  color: black;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 15px;
}
._middle-div-middle {
  padding-left: 4%;
  background: white;
  padding-top: 18px;
  padding-bottom: 5px;
  height: 378px;
}
._middle-div-middle-p {
  color: black;
  font-weight: 600;
  font-size: 14px;
  display: block;
  margin-bottom: 20px;
}
._middle-div-middle-p span {
  display: inline-block;
  margin-left: 7px;
  font-weight: 600;
  font-size: 18px;
  color: red;
}
._weixin {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  margin-bottom: 21px;
}
._w-left {
  width: 80%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 1px solid #d6d3d3;
}
._weixin-top {
  width: 12%;
}
._weixin-middle p {
  color: black;
  font-size: 16px;
  font-weight: 600;
}
._weixin-middle span {
  color: #808080;
  font-size: 12px;
}
._weixin-bottom {
  padding-top: 5px;
}
._huabei {
  width: 100%;
  height: 50px;
  margin-bottom: 21px;
}
._huabei-bottom {
  width: 90%;
  margin-left: 10%;
}
._fenqi {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 9px;
  border-bottom: 1px solid #d6d3d3;
  box-sizing: border-box;
  margin-right: 8%;
}
._huabei-title {
  display: inline-block;
  height: 50px;
  border-bottom: 1px solid #d6d3d3;
  width: 80%;
  margin-bottom: 12px;
}
._huabei-title p {
  color: black;
  font-size: 16px;
  font-weight: 600;
}
._huabei-title span {
  color: #808080;
  font-size: 12px;
}
._huabei-top {
  box-sizing: border-box;
  width: 12%;
  display: inline-block;
  position: relative;
}
._huabei-top img {
  position: absolute;
  top: -32px;
  left: 2px;
}
.huise {
  color: #808080;
  font-size: 14px;
}
.price {
  color: black;
  font-size: 13px;
  font-weight: 600;
}
.button {
  width: 80%;
  border-radius: 50px;
  margin: auto auto;
  color: white;
  background: red;
}
</style>
<script>
export default {
  data() {
    return {
      radio: 0,
      time: 24 * 60 * 60 * 1000,
      price: 0,
      count: 0,
    };
  },
  methods: {
    weixin() {},
    zhifubao() {},
    huabei1() {},
    huabei2() {},
    huabei3() {},
    toshopping_car() {
      //提示是否放弃支付
      this.$dialog
        .alert({
          title: "只差一步就可以拥有美丽", //加上标题
          message: "一定要离开嘛", //改变弹出框的内容
          showCancelButton: true, //展示取消按钮
        })
        .then(() => {
          //点击确认按钮后的调用
          // console.log("点击了确认按钮");
          this.$router.push("/shopping_car");
        })
        .catch(() => {
          //点击取消按钮后的调用
          // console.log("点击了取消按钮噢");
        });
    },
    pay() {
      if (this.radio != 0) {
        // console.log(this.radio);
        if (this.radio == 1) {
          // this.$toast({ message: "微信支付成功" });
          this.$router.push(`/suc_weixin?price=${this.price}`)
        } else if (this.radio == 2) {
          this.$toast({ message: "支付宝支付成功" });
        } else if (this.radio == 3) {
          this.$toast({
            message: `花呗支付成功，共分三期，每期支付${(
              this.price / 3
            ).toFixed(2)}`,
          });
        } else if (this.radio == 4) {
          this.$toast({
            message: `花呗支付成功，共分六期，每期支付${(
              this.price / 6
            ).toFixed(2)}`,
          });
        } else {
          this.$toast({
            message: `花呗支付成功，共分十二期，每期支付${(
              this.price / 12
            ).toFixed(2)}`,
          });
        }
      } else {
        this.$toast({
          message: "请选择支付方式",
          position: "middle",
          duration: "2000",
        });
      }
    },
  },
  mounted() {
    let i = location.search.slice(1);
    i = i.split("&");
    // console.log(i);
    this.price = Number(i[0].split("=").slice(1)).toFixed(2);
    // console.log(this.price);
    this.count = Number(i[1].split("=").splice(1));
  },
};
</script>