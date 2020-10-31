<template>
  <div>
    <div>
      <img style="width:100%;" src="http://127.0.0.1:3000/img/_cjs/icon.jpg" alt="" />
      <div :class="{ classOne: scrolls == 0 }">
        <!-- 头部信息开始 -->
        <div>
          <mt-header fixed class="header_one" v-show="scrolls == 1">
            <router-link slot="left" to="/">
              <mt-button icon="back"></mt-button>
            </router-link>
            <div slot="right">
              <mt-button icon="more" type="primary">
                <img src="http://127.0.0.1:3000/img/_cjs/cart_enabled.png" slot="icon" />
              </mt-button>
            </div>
          </mt-header>

          <mt-header
            fixed
            class="header_tow"
            title="品牌馆"
            v-show="scrolls == 0"
          >
            <router-link slot="left" to="/brand">
              <mt-button icon="back"></mt-button>
            </router-link>
            <div slot="right">
              <mt-button icon="more" type="primary">
                <img src="http://127.0.0.1:3000/img/_cjs/cart_disabled.png" slot="icon" />
              </mt-button>
            </div>
          </mt-header>
        </div>
        <!-- 头部信息结束 -->

        <!-- 头部导航开始 -->
        <div>
          <mt-navbar v-model="active" class="navbar">
            <mt-tab-item
              :id="item.id.toString()"
              v-for="(item, index) of brands"
              :key="index"
              >{{ item.brand }}</mt-tab-item
            >
          </mt-navbar>
        </div>
        <!-- 头部导航结束 -->

        <!-- 中间导航开始 -->
        <div class="daohang">
          <mt-tab-container v-model="active">
            <!-- 机构的品牌开始 -->
            <mt-tab-container-item class="container" id="1">
              <span v-for="(item, index) of classify" :key="index">
                <router-link class="neirong" to="/brand">{{ item.quantity_name }}</router-link>
              </span>
            </mt-tab-container-item>
            <!-- 机构的品牌结束 -->

            <!-- 材料的品牌开始 -->
            <mt-tab-container-item class="container" id="2">
              <span v-for="(v, k) of article" :key="k">
                <router-link class="neirong" to="/brand">{{ v }}</router-link>
              </span>
            </mt-tab-container-item>
            <!-- 材料的品牌结束 -->
          </mt-tab-container>
        </div>
        <!-- 中间导航结束 -->
      </div>
    </div>

    <!-- 正文内容开始 -->

    <div class="question_one">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="1" :class="{ questionOne: scrolls == 0 }">
          <!-- 一 -->
          <div
            class="question_tow"
            v-for="(item, index) of classify"
            :key="index"
          >
            <div class="question">
              <!-- 品牌log开始 -->
              <div>
                <img v-lazy="item.quantity_log" class="question_img" />
              </div>
              <!-- 品牌信息开始 -->
              <div>
                <div class="question_top">
                  <p>{{ item.quantity_name }}</p>
                  <router-link to="/brand" class="question_a"
                    >品牌专场<span class="icon"></span
                  ></router-link>
                </div>
                <div class="span">
                  <span>{{ item.quantity_brand }}</span
                  >|<span>{{ item.quantity_city }}</span
                  >|<span>{{ item.quantity_doctor }}</span>
                </div>
              </div>
              <!-- 品牌信息结束 -->
            </div>
            <div class="jianjie">
              <div>
                <!-- 品牌简介开始 -->
                <div><span class="icon_one"></span>品牌简介</div>
                <div>
                  {{ item.quantity_introduce }}
                </div>
                <!-- 品牌简介结束 -->
              </div>

              <div class="lianjie">
                <!-- 诊断价格开始 -->
                <router-link to="/brand">
                  <div>
                    <img v-lazy="item.quantity_playbill" alt="" />
                  </div>
                </router-link>

                <div>
                  <router-link to="/brand">
                    <div>
                      <img src="http://127.0.0.1:3000/img/_cjs/taikang_3.png" alt="" />
                    </div>
                    <div>
                      <div class="neirong">
                        [金属托槽矫正]&nbsp;[26年专&nbsp;·&nbsp;·&nbsp;·
                      </div>
                    </div>
                    <div class="jiage">
                      <van-tag type="danger">特</van-tag><span>¥18000</span><span>¥23000</span>
                    </div>
                  </router-link>

                  <router-link to="/brand">
                    <div>
                      <img src="http://127.0.0.1:3000/img/_cjs/taikang_4.png" alt="" />
                    </div>
                    <div>
                      <div class="neirong">
                        [隐形矫正]&nbsp;[田园院长亲诊&nbsp;·&nbsp;·&nbsp;·
                      </div>
                    </div>
                    <div class="jiage">
                      <van-tag type="danger">特</van-tag><span>¥28000</span><span>¥30000</span>
                    </div>
                  </router-link>

                  <router-link to="/brand">
                    <div>
                      <img src="http://127.0.0.1:3000/img/_cjs/taikang_5.png" alt="" />
                    </div>
                    <div>
                      <div class="neirong">
                        [隐形托槽矫正]&nbsp;进口orm&nbsp;·&nbsp;·&nbsp;·
                      </div>
                    </div>
                    <div class="jiage">
                      <van-tag type="danger">特</van-tag><span>¥9800</span><span>¥21500</span>
                    </div>
                  </router-link>
                </div>
                <!-- 诊断价格结束 -->
              </div>
            </div>
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="2" :class="{ meterialOne: scrolls == 0 }">
          <!-- 一 -->
          <div
            id="meterial"
            class="meterial"
            v-for="(item, index) of classify" :key="index"
          >
            <div>
              <img style="width:100%;" v-lazy="item.quantity_background" />
            </div>
            <div class="meterial_one">
              <!-- 品牌log开始 -->
              <div>
                <div>
                  <img v-lazy="item.quantity_log" class="meterial_img" />
                </div>
                <!-- 品牌信息开始 -->
                <div>
                  <div class="meterial_router">
                    <p>{{ item.quantity_name }}</p>
                    <router-link to="/brand" class="meterial_a"
                      >了解品牌<span class="icon"></span
                    ></router-link>
                  </div>
                  <div class="meterial_span">
                    <span><img v-lazy="item.quantity_flag" alt="" /></span
                    ><span>{{ item.quantity_country }}</span
                    >|<span>{{ item.quantity_material }}</span>
                  </div>
                </div>
                <!-- 品牌信息结束 -->
              </div>

              <div class="meterial_jianjie">
                <div> -->
                  <!-- 品牌简介开始 -->
                  <div><span class="icon_one"></span>品牌简介</div>
                  <div>
                    {{ item.quantity_introduce }}
                  </div>
                  <!-- 品牌简介结束 -->
                </div>

                <div class="meterial_zhanshi">
                  <!-- 效果展示开始 -->
                  <div>
                    <span class="icon_tow"></span>
                    <span>效果展示</span>

                    <div>
                      <img v-lazy="item.quantity_contrast_one" />
                      <img v-lazy="item.quantity_contrast_tow" />
                    </div>
                  </div>
                  <!-- 效果展示结束 -->
                </div>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 正文内容结束 -->
  </div>
</template>
<style>
.navbar .mint-tab-item .mint-tab-item-label {
  font-size: 18px;
  color: #000;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}
::-webkit-scrollbar {
  display: none;
}
</style>
<style  scoped>
/* .neirong{
  font-size: 14px;
} */
/* 头部样式 */
.header_one {
  background-color: transparent;
}
.header_tow {
  background-color: #fff;
  color: black;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
}
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px 0;
}
.container span{
  display: inline-block;
  box-sizing: border-box;
  /* padding-top: 1%; */
}
.container span a{
  font-size: 16px;
  color: #2e2d2d;
  height: 85%;
  margin-top: 0;
}
.classOne {
  position: fixed;
  left: 0;
  right: 0;
  top: 40px;
  z-index: 2;
}
.container>span{
  box-sizing: border-box;
  width: 24%;
  display: inline-block;
}
.container a {
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 15px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  background-color: #efefef;
  border-radius: 7px;
  padding: 3px 5px;
  margin-top: 5px;
}
.daohang {
  background-color: #fff;
}
.icon {
  background-image: url("http://127.0.0.1:3000/img/_cjs/icon.png");
  display: inline-block;
  width: 16%;
  height: 16px;
  margin: 0 0 -2px 8px;
}

/* 机构品牌正文区样式 */
.question {
  display: flex;
  margin-top: 20px;
}
.question >div:last-child{
  width: 70%;
}
.questionOne {
  margin-top: 325px;
}
.question_one {
  background-color: #eee;
}
.question_tow {
  background-color: #fff;
  width: 95%;
  margin: auto;
  border-radius: 5px;
}
.question_top {
  display: flex;
}
.question_img {
  margin: -10px 10px 0 10px;
  border-radius: 10px;
}
.question_tow p {
  width: 54%;
  font-size: 18px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  margin-top: 15px;
}
.question_a {
  width: 36%;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border: 1px solid #04a9f4;
  padding: 3px 15px;
  line-height: 20px;
  border-radius: 10px;
  margin-top: 3%;
  color: black;
  margin-bottom: 5%;
  margin-left: 14%;
}
.span > span {
  font-size: 14px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 0 5px;
}
.icon_one {
  background-image: url("http://127.0.0.1:3000/img/_cjs/icon_2.png");
  display: inline-block;
  width: 8%;
  height: 16px;
}
.jianjie {
  font-size: 15px;
  color: #999;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: inherit;
  width: 100%;
}
.lianjie {
  display: flex;
  overflow-x: scroll;
  padding: 15px 0;
}
.lianjie > div {
  display: flex;
}
.lianjie > div > a {
  display: inline-block;
  width: 34%;
  text-decoration: none;
  margin-left: 8px;
  color: #333;
  font-weight: 300;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.neirong {
  font-size: 14px;
  box-sizing: border-box;
  width: 90%;
  height: 30px;
  margin: auto;
}
.jiage{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.jiage > span:nth-child(1) {
  width: 13%;
  height: 16px;
  background-color: red;
}
.jiage > span:nth-child(2) {
  width: 45%;
  font-size: 13px;
  color: red;
  margin-top: 5px;
}
.jiage > span:nth-child(3) {
  width: 45%;
  margin-top: 5px;
  font-size: 12px;
  text-decoration: line-through;
}





.meterial {
  margin-top: 20px;
}
.meterialOne {
  margin-top: 180px;
}
.meterial_one {
  width: 90%;
  display: inline-block;
  margin: -70px 18px 0;
  padding-bottom: 20px;
  background-color: #fff;
}
.meterial_one > div:first-child {
  display: flex;
}
.meterial_one > div:first-child>div:last-child {
  width: 70%;
}
.meterial_img {
  margin: -15px 0 0 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 5px #999;
}
.meterial_router {
  display: flex;
}
.meterial_router p {
  width: 50%;
  font-size: 18px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  margin: 15px 0 0 10px;
}
.meterial_a {
  text-decoration: none;
  display: inline-block;
  width: 36%;
  font-size: 15px;
  border: 1px solid #04a9f4;
  padding: 3px 15px;
  line-height: 20px;
  border-radius: 10px;
  margin-top: 3%;
  color: black;
  margin-bottom: 5%;
  margin-left: 9%;
}
.meterial_span {
  margin-left: 10px;
  font-size: 14px;
}
.meterial_span > span {
  margin: 0 5px;
}
.meterial_jianjie {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  color: #999;
  font-weight: inherit;
  margin: 15px 0 0 13px;
}
.meterial_jianjie > div > div:last-child {
  margin-top: 10px;
}
.meterial_zhanshi {
  font-size: 14px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: inherit;
  margin: 10px 0 0 5px;
}
.icon_tow {
  display: inline-block;
  width: 5%;
  height: 16px;
  background-image: url("http://127.0.0.1:3000/img/_cjs/xianshi.png");
  margin: 0 5px -4px 0;
}
.meterial_zhanshi > div > div {
  margin-top: 10px;
}
.meterial_zhanshi > div > div > img:last-child {
  margin-left: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      scrolls: 1,
      active: "1",
      brands: [],
      classify: [],
      articles: [
        "拜博口腔",
        "维恩口腔",
        "圣贝口腔",
        "同步齿科",
        "维乐口腔",
        "成都极光口腔",
        "正夫口腔",
        "重庆瑞泰口腔",
        "合众齿科",
        "麦芽口腔",
        "华尔口腔连锁",
        "上海薇琳口腔",
        "美奥口腔",
        "华颜口腔",
        "长沙美奥口腔",
        "杭州薇琳口腔",
        "中家医口腔",
        "广大口腔",
        "北京薇琳口腔",
        "中诺口腔",
        "劲松口腔",
        "瑞泰口腔",
        "穗江口腔",
        "好大夫口腔",
        "福华口腔",
        "美莱口腔",
        "泰康拜博",
        "正雅隐形矫正",
      ],
      article: [
        "正雅",
        "美立刻",
        "时代天使",
        "隐形美",
        "登腾",
        "DIOnavi.",
        "诺贝尔",
        "奥齿泰",
      ],
    };
  },
  mounted() {
    addEventListener("scroll", this.handleScroll);
    // 获取品牌分类
    this.$indicator.open({
        text:'加载中...',
        spinnerType:'double-bounce'
      });
    this.axios
      .get("/brands")
      .then((res) => {
        this.brands = res.data.results;
      })
      .catch((err) => {});
    // 获取品牌分类下的信息
    this.axios
      .get("/classify?cid=" + this.active)
      .then((res) => {
        let data = res.data.results;
        data.forEach((item) => {
          if (item.quantity_log !== "") {
            item.quantity_log = `http://127.0.0.1:3000/img/_cjs/${item.quantity_log}`
          }
          if (item.quantity_playbill !== "") {
            item.quantity_playbill ="http://127.0.0.1:3000/img/_cjs/"+item.quantity_playbill
          }
          this.classify.push(item);
        });
        this.$indicator.close();
      })
      .catch((err) => {});
      
  },
  methods: {
    handleScroll() {
      let scrolls = document.documentElement.scrollTop;
      if (scrolls < 100) {
        this.scrolls = 1;
      } else {
        this.scrolls = 0;
      }
    },
  },
  watch: {
    active() {
      this.classify = [];
      this.$indicator.open({
        text:'加载中...',
        spinnerType:'double-bounce'
      });
      this.axios
        .get("/classify?cid=" + this.active)
        .then((res) => {
          let data = res.data.results;
          data.forEach((item) => {
            item.quantity_log = "http://127.0.0.1:3000/img/_cjs/" +item.quantity_log
            if (item.quantity_background !== "") {
              item.quantity_background = "http://127.0.0.1:3000/img/_cjs/" +item.quantity_background
            }
            if (item.quantity_contrast_one !== "") {
              item.quantity_contrast_one = "http://127.0.0.1:3000/img/_cjs/" +item.quantity_contrast_one
            }
            if (item.quantity_contrast_tow !== "") {
              item.quantity_contrast_tow = "http://127.0.0.1:3000/img/_cjs/" +item.quantity_contrast_tow
            }
            if (item.quantity_playbill !== "") {
              item.quantity_playbill = "http://127.0.0.1:3000/img/_cjs/" +item.quantity_playbill
            }
            if (item.quantity_flag !== "") {
              item.quantity_flag = "http://127.0.0.1:3000/img/_cjs/" +item.quantity_flag
            }
            this.classify.push(item);
          });
          this.$indicator.close();
        })
        .catch((err) => {});
    },
  },
};
</script>