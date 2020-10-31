<template>
  <div class="correct">
    <!-- 顶部导航开始 -->
    <div class="_cor-conter">
      <div class="_cor_overlap">
        <mt-header class="_cor-header" v-if="scrolls == 1">
          <router-link slot="left" to="/">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <mt-header fixed class="_cor_hedl" title="牙齿矫正榜" v-else>
          <router-link slot="left" to="/">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <mt-tab-container class="_cor-header" v-model="active">
        <mt-tab-container-item id="1">
          <h1>牙齿美白榜</h1>
          <p>按浏览/收藏/加购/咨询等指标综合计算</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <h1>牙齿美白榜</h1>
          <p>按照累计销售等指标综合计算</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <h1>牙齿美白榜</h1>
          <p>按照好评率/评价数等指标综合计算</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 顶部导航结束 -->

    <!-- 顶部选项卡开始 -->
    <div class="_cor_start">
      <div class="_cor_fixed">
        <mt-navbar v-model="active">
          <mt-tab-item id="1">
            <button class="_cor-btn1" v-if="active == 1">人气榜</button>
            <button class="_cor-btn" v-else>人气榜</button>
          </mt-tab-item>
          <mt-tab-item id="2">
            <button class="_cor-btn1" v-if="active == 2">热销榜</button>
            <button class="_cor-btn" v-else>热销榜</button>
          </mt-tab-item>
          <mt-tab-item id="3">
            <button class="_cor-btn1" v-if="active == 3">口碑榜</button>
            <button class="_cor-btn" v-else>口碑榜</button>
          </mt-tab-item>
        </mt-navbar>
      </div>

      <!-- 顶部选项卡结束 -->

      <!-- 面板开始 ===>人气榜 -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="1">
          <!-- 图片 -->
          <div class="_cor-main" v-for="(item, index) of goods" @click="detail(item.goods_id)" :key="index">
            <div class="_cor-cor">
              <img :src="`http://127.0.0.1:3000/img/server_img/${item.goods_img}`" />
            </div>
            <!-- 简介 -->
            <div class="_cor-cor_desc">
              <p class="van-multi-ellipsis--l2">{{ goods[0].goods_name }}</p>
              <p class="_cor-desc2">
                <span>{{ goods[0].doctor_id }}|{{ goods[0].territory }}</span>
                <span class="_cor-desc3">4.1km</span>
              </p>
              <div class="_cor-desc4">
                <img
                  class="_cor-desc_img"
                  src="http://127.0.0.1:3000/img/_liu/liu_hot2.png"
                />
                <span class="_cor-desc_text">人气Top优选</span>
              </div>
              <p class="_cor-desc5">
                <span>{{ goods[0].original_price }}</span>
                <span>预约金满{{ goods[0].prepay }}减240</span>
              </p>
            </div>
          </div>
          <div class="_cor-end">没有更多了哦</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <!-- 面板开始===>热销榜 -->
          <div class="_cor-main" v-for="(item, index) of goods" @click="detail(item.goods_id)" :key="index">
            <div class="_cor-cor">
              <img :src="`http://127.0.0.1:3000/img/server_img/${item.goods_img}`" />
            </div>
            <!-- 简介 -->
            <div class="_cor-cor_desc">
              <p class="van-multi-ellipsis--l2">{{ goods[0].goods_name }}</p>
              <p class="_cor-desc2">
                <span>{{ goods[0].doctor_id }}|{{ goods[0].territory }}</span>
                <span class="_cor-desc3">4.1km</span>
              </p>
              <div class="_cor-desc4">
                <img
                  class="_cor-desc_img"
                  src="http://127.0.0.1:3000/img/_liu/liu_hot2.png"
                />
                <span class="_cor-desc_text">人气Top优选</span>
              </div>
              <p class="_cor-desc5">
                <span>{{ goods[0].original_price }}</span>
                <span>预约金满{{ goods[0].prepay }}减240</span>
              </p>
            </div>
          </div>
          <div class="_cor-end">没有更多了哦</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <!-- 面板开始===>口碑榜 -->
          <div class="_cor-main" v-for="(item, index) of goods" @click="detail(item.goods_id)" :key="index">
            <div class="_cor-cor">
              <img :src="`http://127.0.0.1:3000/img/server_img/${item.goods_img}`" />
            </div>
            <!-- 简介 -->
            <div class="_cor-cor_desc">
              <p class="van-multi-ellipsis--l2">{{ goods[0].goods_name }}</p>
              <p class="_cor-desc2">
                <span>{{ goods[0].doctor_id }}|{{ goods[0].territory }}</span>
                <span class="_cor-desc3">4.1km</span>
              </p>
              <div class="_cor-desc4">
                <img
                  class="_cor-desc_img"
                  src="http://127.0.0.1:3000/img/_liu/liu_hot2.png"
                />
                <span class="_cor-desc_text">人气Top优选</span>
              </div>
              <p class="_cor-desc5">
                <span>{{ goods[0].original_price }}</span>
                <span>预约金满{{ goods[0].prepay }}减240</span>
              </p>
            </div>
          </div>
          <!-- 底部 -->
          <div class="_cor-end">没有更多了哦</div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
  <!-- 面板结束 -->
</template>
<style scoped>
._cor-correct {
  background-color: #f8f8f8;
}
._cor-header {
  background-color: transparent;
}
._cor-conter {
  height: 9rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("http://127.0.0.1:3000/img/_liu/liu_home.jpg");
}
._cor_hedl {
  color: #000;
  background-color: rgb(252, 249, 249, 1);
}
._cor-header h1 {
  font-size: 26px;
  color: white;
  text-align: center;
  letter-spacing: 2px;
}
._cor-header p {
  width: 66.6%;
  text-align: center;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #fff;
  font-weight: lighter;
  background-color: rgba(9, 9, 9, 0.2);
  margin: 6px auto;
  padding: 3px;
}
.mint-navbar .mint-tab-item {
  padding: 12px 0;
}
.mint-navbar .mint-tab-item.is-selected {
  border: 0;
}
._cor_start {
  background-color: #f5f5f5;
}

._cor-btn1 {
  width: 66.6%;
  height: 30px;
  color: red;
  border: 1px solid #f00;
  border-radius: 20px;
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
}
._cor-btn {
  width: 66.6%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
}

/* 面板开始 */
._cor-main {
  height: 165px;
  margin: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: #fff;
  margin-bottom: 10px;
}
._cor-cor {
  margin: 15px;
  border: 1px solid #fff;
  border-radius: 15px;
  width: 30%;
}
._cor-cor img{
  width: 100%;
}
._cor-cor_desc {
  width:53.3%;
  margin-top: 10px;
}
.van-multi-ellipsis--l2 {
  width: 51.2%;
  height: 36px;
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 5px;
}
._cor-desc2 {
  margin-top: 5px;
  line-height: 16px;
  display: flex;
}
._cor-desc2 > span:first-child {
  width:40%;
  font-size: 12px;
  line-height: 16px;
  color: #585858;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
._cor-desc3 {
  font-size: 12px;
  color: #484848;
  display: inline-block;
  margin-left: 15px;
}
._cor-desc4 {
  width: 60%;
  margin-top: 8px;
  border: 1px solid #fff;
  border-radius: 15px;
  background-color: #ff4400;
}
._cor-desc_img {
  margin-left: -2px;
  width: 20px;
  height: 20px;
}
._cor-desc_text {
  font-size: 10px;
  color: white;
  padding-left: 5px;
  background-color: #ff4400;
  border-radius: 15px;
  text-align: center;
}
._cor-desc5 {
  margin-top: 10px;
  display: flex;
}
._cor-desc5 span:nth-child(1) {
  color: #ff4400;
  font-weight: 600;
  font-size: 20px;
}
._cor-desc5 span:nth-child(2) {
  color: #ff4400;
  font-size: 12px;
  font-weight: 300;
  border: 1px solid #ff4400;
  border-radius: 3px;
  margin-left: 3px;
  padding: 3px;
}
._cor-end {
  font-size: 14px;
  color: #484848;
  padding: 30px;
  text-align: center;
}
</style>
<script>
export default {
  data() {
    return {
      //默认被选定的顶部选项卡及面板的ID
      active: "1",
      scrolls: 1,
      goods: [],
    };
  },
  mounted() {
    addEventListener("scroll", this.handleScroll);
    //获取医生信息
    this.axios.get("/goods").then((res) => {
      let dataString = JSON.stringify(res.data.results);
      let moredata = JSON.parse(dataString);
      this.goods=moredata;
      // console.log(this.goods)
    });
  },
  methods: {
    handleScroll() {
      let scroll = document.documentElement.scrollTop;
      if (scroll < 100) {
        this.scrolls = 1;
      } else {
        this.scrolls = 0;
      }
    },
        detail(i){
      this.$router.push(`/detail?id=${i}&path=cure`)
    }
  },
};
</script>
