<template>
  <div class="_container">
    <!-- 顶部开始 -->
    <mt-header title="我的订单" class="header" fixed>
      <mt-button
        slot="left"
        icon="back"
        style="color: black"
        @click="back()"
      ></mt-button>
      <mt-button slot="right" style="color: #6f6f6f; font-size: 14px"
        >我的询价</mt-button
      >
    </mt-header>
    <!-- 顶部结束 -->
    <!-- 内容开始 -->
    <div style="margin-top: 40px">
      <!-- 选项卡组件开始 -->
      <div>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">全部</mt-tab-item>
          <mt-tab-item id="2">待付款</mt-tab-item>
          <mt-tab-item id="3">未使用</mt-tab-item>
          <mt-tab-item id="4">待评价</mt-tab-item>
          <mt-tab-item id="5">待写日记</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item class="_item1" id="1">
            <!-- 刷新组件 开始 -->
            <van-pull-refresh
              v-model="isLoading"
              @refresh="onRefresh"
              class="_height"
            >
              <!-- 此处假装有单
              <div class="_indent">
                <!-- 上部状态 -->
                <!-- <div class="_indent-top"> -->
                  <!-- 剩余时间 -->
                  <!-- <div class="_indent-top-left">
                    <span>剩余付款时间22小时</span>
                  </div> -->
                  <!-- 状态 -->
                  <!-- <div class="_indent-top-right">
                    <span>等待付款</span>
                  </div>
                </div> -->
                <!-- 下部详情 -->
                <!-- <div class="_indent-bottom"> -->
                  <!-- 图片 -->
                  <!-- <div class="_indent-bottom-left">
                    <img src="../assets/home_img/dingdan_test.jpg" alt="" />
                  </div> -->
                  <!-- 字 -->
                  <!-- <div class="_indent-bottom-right"> -->
                    <!-- 隐形矫正----- -->
                    <!-- <span class="_indent-bt-top"
                      >【隐形矫正】&nbsp;【隐适美】牙套看不见，矫正也轻松，明星矫正同款牙套~</span
                    > -->
                    <!-- 数量 -->
                    <!-- <div class="_indent-bt-middle"><span>×1</span></div> -->
                    <!-- 项目 钱 -->
                    <!-- <div class="_indent-bt-bottom-l">
                      <span>预约金+黑卡合计:</span
                      ><span class="_indent-bt-bottom-r">￥4369</span>
                    </div>
                  </div>
                </div>
                <div class="_indent-button"> -->
                  <!-- 按钮 -->
                  <!-- <van-button plain hairline round>付款</van-button>
                </div>
              </div> -->

              <!-- 此处假装有单 -->
              <!-- <div class="_indent"> -->
                <!-- 上部状态 -->
                <!-- <div class="_indent-top"> -->
                  <!-- 剩余时间 -->
                  <!-- <div class="_indent-top-left"> -->
                    <!-- <span>已付款</span> -->
                  <!-- </div> -->
                  <!-- 状态 -->
                  <!-- <div class="_indent-top-right">
                    <span>等待付款</span>
                  </div> -->
                <!-- </div> -->
                <!-- 下部详情 -->
                <!-- <div class="_indent-bottom"> -->
                  <!-- 图片 -->
                  <!-- <div class="_indent-bottom-left">
                    <img src="../assets/home_img/dingdan_test.jpg" alt="" />
                  </div> -->
                  <!-- 字 -->
                  <!-- <div class="_indent-bottom-right"> -->
                    <!-- 隐形矫正----- -->
                    <!-- <span class="_indent-bt-top"
                      >【隐形矫正】&nbsp;【隐适美】牙套看不见，矫正也轻松，明星矫正同款牙套~</span
                    > -->
                    <!-- 数量 -->
                    <!-- <div class="_indent-bt-middle"><span>×2</span></div> -->
                    <!-- 项目 钱 -->
                    <!-- <div class="_indent-bt-bottom-l">
                      <span>预约金+黑卡合计:</span
                      ><span class="_indent-bt-bottom-r">￥23135</span>
                    </div>
                  </div>
                </div> -->
                <!-- <div class="_indent-button"> -->
                  <!-- 按钮 -->
                  <!-- <van-button plain hairline round>去评论</van-button>
                </div>
              </div> --> 
              <!-- 刷新组件 结束 -->
              <span class="_no-more">没有更多了哦~</span>
            </van-pull-refresh>
          </mt-tab-container-item>
          <mt-tab-container-item class="_item1" id="2">
            <van-pull-refresh
              v-model="isLoading"
              @refresh="onRefresh"
              class="_height"
            >
              <!-- 此处假装有单 -->
              <!-- <div class="_indent"> -->
                <!-- 上部状态 -->
                <!-- <div class="_indent-top"> -->
                  <!-- 剩余时间 -->
                  <!-- <div class="_indent-top-left"> -->
                    <!-- <span>剩余付款时间22小时</span> -->
                  <!-- </div> -->
                  <!-- 状态 -->
                  <!-- <div class="_indent-top-right"> -->
                    <!-- <span>等待付款</span> -->
                  <!-- </div> -->
                <!-- </div> -->
                <!-- 下部详情 -->
                <!-- <div class="_indent-bottom"> -->
                  <!-- 图片 -->
                  <!-- <div class="_indent-bottom-left"> -->
                    <!-- <img src="../assets/home_img/dingdan_test.jpg" alt="" /> -->
                  <!-- </div> -->
                  <!-- 字 -->
                  <!-- <div class="_indent-bottom-right"> -->
                    <!-- 隐形矫正----- -->
                    <!-- <span class="_indent-bt-top" -->
                      <!-- >【隐形矫正】&nbsp;【隐适美】牙套看不见，矫正也轻松，明星矫正同款牙套~</span -->
                    <!-- > -->
                    <!-- 数量 -->
                    <!-- <div class="_indent-bt-middle"><span>×1</span></div> -->
                    <!-- 项目 钱 -->
                    <!-- <div class="_indent-bt-bottom-l"> -->
                      <!-- <span>预约金+黑卡合计:</span -->
                      <!-- ><span class="_indent-bt-bottom-r">￥4369</span> -->
                    <!-- </div> -->
                  <!-- </div> -->
                <!-- </div> -->
                <!-- <div class="_indent-button"> -->
                  <!-- 按钮 -->
                  <!-- <van-button plain hairline round>付款</van-button> -->
                <!-- </div> -->
              <!-- </div> -->
              <!-- 刷新组件 结束 -->
              <span class="_no-more">没有更多了哦~</span>
            </van-pull-refresh>
          </mt-tab-container-item>
          <mt-tab-container-item class="_item1" id="3">
            <!-- 刷新组件 开始 -->
            <van-pull-refresh
              v-model="isLoading"
              @refresh="onRefresh"
              class="_height"
              >
              <!-- 此处假装有单
            <div> -->
              <!-- 上部状态 -->
              <!-- <div>

              </div> -->
              <!-- 下部详情 -->
              <!-- <div>

              </div>
            </div> -->
              <!-- 刷新组件 结束 -->
              <span class="_no-more">没有更多了哦~</span>
            </van-pull-refresh>
          </mt-tab-container-item>
          <mt-tab-container-item class="_item1" id="4">
            <!-- 刷新组件 开始 -->
            <van-pull-refresh
              v-model="isLoading"
              @refresh="onRefresh"
              class="_height"
            >


              <!-- 此处假装有单 -->
              <!-- <div class="_indent"> -->
                <!-- 上部状态 -->
                <!-- <div class="_indent-top"> -->
                  <!-- 剩余时间 -->
                  <!-- <div class="_indent-top-left"> -->
                    <!-- <span>已付款</span> -->
                  <!-- </div> -->
                  <!-- 状态 -->
                  <!-- <div class="_indent-top-right">
                    <span>等待付款</span>
                  </div> -->
                <!-- </div> -->
                <!-- 下部详情 -->
                <!-- <div class="_indent-bottom"> -->
                  <!-- 图片 -->
                  <!-- <div class="_indent-bottom-left"> -->
                    <!-- <img src="../assets/home_img/dingdan_test.jpg" alt="" /> -->
                  <!-- </div> -->
                  <!-- 字 -->
                  <!-- <div class="_indent-bottom-right"> -->
                    <!-- 隐形矫正----- -->
                    <!-- <span class="_indent-bt-top"
                      >【隐形矫正】&nbsp;【隐适美】牙套看不见，矫正也轻松，明星矫正同款牙套~</span
                    > -->
                    <!-- 数量 -->
                    <!-- <div class="_indent-bt-middle"><span>×2</span></div> -->
                    <!-- 项目 钱 -->
                    <!-- <div class="_indent-bt-bottom-l">
                      <span>预约金+黑卡合计:</span
                      ><span class="_indent-bt-bottom-r">￥23135</span>
                    </div>
                  </div>
                </div>
                <div class="_indent-button"> -->
                  <!-- 按钮 -->
                  <!-- <van-button plain hairline round>去评论</van-button> -->
                <!-- </div> -->
              <!-- </div> -->
              <!-- 刷新组件 结束 -->
              <span class="_no-more">没有更多了哦~</span>
            </van-pull-refresh>
          </mt-tab-container-item>
          <mt-tab-container-item class="_item1" id="5">
            <!-- 刷新组件 开始 -->
            <van-pull-refresh
              v-model="isLoading"
              @refresh="onRefresh"
              class="_height"
              >
              <!-- 此处假装有单
            <div> -->
              <!-- 上部状态 -->
              <!-- <div>

              </div> -->
              <!-- 下部详情 -->
              <!-- <div>

              </div>
            </div> -->
              <!-- 刷新组件 结束 -->
            <span class="_no-more">没有更多了哦~</span>
            </van-pull-refresh>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <!-- 选项卡组件结束 -->
    </div>
    <!-- 内容结束 -->
  </div>
</template>
<style scoped>
._container{
  text-align: center;
}
._item1{
  background: #F4F5F7;
  height: 580px;
}
._no-more {
  display: block;
  margin-top: 50px;
  font-size: 12px;
  color: #858585;
}
._indent {
  padding-top: 10px;
  width: 100%;
  height: 160px;
  background: white;
  margin: 4px 4px;
  box-sizing: border-box;
}
._indent-top {
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  height: 20px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #f6f6f6;
}
._indent-top-left {
  display: inline-block;
  color: #858585;
  font-size: 12px;
}
._indent-top-right {
  display: inline-block;
  color: red;
  font-size: 12px;
}
._indent-bottom {
  width: 100%;
  height: 100px;
  padding-left: 12px;
  padding-top: 15px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: left;
}
._indent-bottom-left {
  width: 80px;
  height: 80px;
  display: inline-block;
}
._indent-bottom-left img {
  width: 80px;
  height: 80px;
}
._indent-bottom-right {
  padding-left: 10px;
  display: flex;
  flex-flow: column;
  width: 250px;
  height: 80px;
  display: inline-block;
  text-align: left;
}
._indent-bt-top {
  line-height: 20px;
  display: block;
  color: black;
  font-size: 13px;
  margin-bottom: 8px;
}
._indent-bt-middle {
  display: block;
  color: #858585;
  font-size: 12px;
  text-align: right;
  margin-bottom: 7px;
}
._indent-bt-bottom-l {
  text-align: left;
  color: #858585;
  font-size: 12px;
  margin-bottom: 5px;
}
._indent-bt-bottom-r {
  color: red;
  font-size: 13px;
}
._indent-button {
  text-align: right;
  padding-right: 18px;
}
._indent-button button {
  width: 80px;
  height: 25px;
  border: 1px solid #cccccc;
  font-size: 13px;
}
.header {
  background: white;
  color: black;
  font-size: 16px;
}
._height {
  height: 670px;
}
</style>
<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      selected: "1",
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    back() {
      this.$router.push("/recommend");
    },
  },
};
</script>