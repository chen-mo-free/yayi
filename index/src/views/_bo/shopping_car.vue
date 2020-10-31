<template>
  <div class="container">
    <!-- 顶部开始 -->
    <mt-header class="_header" title="购物车" fixed>
      <mt-button slot="left" icon="back" @click="toshoppingcar"></mt-button>
      <mt-button slot="right" @click="_todelete()">管理</mt-button>
    </mt-header>
    <!-- 顶部结束 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 中间部分开始 -->
      <!-- 复选框组开始 -->
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div style="margin-top: 40px">
          <!-- 当购物车内没有订单 空空如也LOGO 开始 -->
          <div class="_empty" v-if="this.exist == 0">
            <!-- <img src="http://127.0.0.1:3000/img/_bo/dingdan_test.jpg" alt=""> -->
            <img src="http://127.0.0.1:3000/img/_bo/home_img/shopping_car_logo.png" alt="" />
            <p>购物车空空如也</p>
          </div>
          <!-- 当购物车内没有订单 空空如也LOGO 结束 -->
          <!-- 购物车内有东西 开始 -->
          <!-- v-for创建 item代表遍历出的这一组数据 i代表下标 -->
          <div class="_full" v-else>
            <!-- v-for获数据并创建内容 开始 -->
            <div
              class="_dingdan"
              :id="i"
              v-for="(item, i) in this.order_info"
              :key="i"
            >
              <!-- 上边订单div -->
              <div class="_dingdan-top">
                <!-- 左边单选框 -->
                <div class="_dingdan-top-radio">
                  <!-- 循环创建单选框时，name值直接使用遍历时的下标号 -->
                  <van-checkbox
                    class="_dingdan-top-radio-input"
                    :name="i + 1"
                    ref="checkboxes"
                    @click="radio(i + 1, item.goods_id)"
                  ></van-checkbox>
                </div>
                <div class="_dingdan-top-right">
                  <!-- 换购 -->
                  <div class="_dingdan-top-huangou">
                    <div><span class="_dingdan-top-huangou-span"
                        ><van-tag type="danger">换购</van-tag>&nbsp;满1件可低价换购商品</span
                      >
                    </div>
                    <router-link class="_dingdan-top-huangou-a" to="/"
                      >去换购&nbsp;></router-link
                    >
                  </div>
                  <!-- 信息 -->
                  <div class="_dingdan-top-xinxi">
                    <!-- 左图片 -->
                    <div class="_dingdan-top-xinxi-img">
                      <img class="iii" :src="`http://127.0.0.1:3000/img/${bb}`" alt="" />
                    </div>
                    <!-- 右文字信息 -->
                    <div class="_dingdan-top-xinxi-text">
                      <span class="van-multi-ellipsis--l2">{{
                        item.goods_name
                      }}</span>
                      <span class="_dingdan-top-xinxi-text-middle">{{
                        item.territory
                      }}</span>
                      <span class="_dingdan-top-xinxi-text-bottom"
                        >￥{{
                          item.original_price  * item.goods_num
                        }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- 价格数量 -->
              <div class="_dingdan-bottom">
                <!-- 左边价格 -->
                <div class="_dingdan-bottom-left">
                  <div class="_dingdan-bottom-yufu">
                    <span>预付金：</span>
                    <span class="jisuan"
                      >￥{{ item.prepay * item.goods_num }}</span
                    >
                    <!-- <span>￥{{ item.prepay * count * item.goods_num }}</span> -->
                  </div>
                  <div class="_dingdan-bottom-daofu">
                    <span>到院再付：</span
                    ><span
                      >￥{{
                        (item.original_price - item.prepay) *
                        count *
                        item.goods_num
                      }}</span
                    >
                  </div>
                </div>
                <!-- 右边数量 -->
                <div class="_dingdan-bottom-right">
                  <van-stepper
                    v-model="item.goods_num"
                    @change="change(item.prepay * item.goods_num)"
                    class="buttonborder"
                  />
                </div>
              </div>
            </div>
            <!-- v-for获数据并创建内容 结束 -->
          </div>
          <!-- 购物车内有东西 结束 -->
        </div>
        <!-- 购物车内东西结束后，推荐 开始 -->
        <div class="_tuijian">
          <p>—&nbsp;你可能还喜欢&nbsp;—</p>
          <div class="_tuijian-div">
            <div v-for="(item,index) of this.goods" :key="index" class="_tuijian-div-lr">
              <!-- 上图 -->
              <div class="_tuijian-div-lr-img">
                <img :src="`http://127.0.0.1:3000/img/server_img/${item.goods_img}`" alt="" />
              </div>
              <!-- 下信息 -->
              <div class="_tuijian-div-lr-bottom">
                <div
                  class="van-multi-ellipsis--l2"
                  style="margin: 5px 0; font-size: 14px; font-weight: 600"
                >
                  {{item.goods_name}}
                </div>
                <div
                  class="van-multi-ellipsis--l2"
                  style="
                    display: block;
                    font-size: 12px;
                    color: #808080;
                    margin-bottom: 5px;
                  "
                >
                  {{item.introduction}}
                </div>
                <div style="margin-bottom: 3px">
                  <span class="_lr-bottom-middle-left">￥{{item.original_price}}</span>
                  <span v-show="item.prepay" class="_lr-bottom-middle-right">￥{{item.prepay}}</span>
                </div>
                <!-- <span class="_lr-bottom-bottom"
                  >{{item.doctor_id}}</span
                > -->
              </div>
            </div>
          </div>
        </div>
        <!-- 购物车内东西结束后，推荐 结束 -->
      </van-checkbox-group>
      <!-- 复选框组结束 -->
      <!-- 中间部分结束 -->
    </van-pull-refresh>
    <!-- 底部开始 -->
    <van-submit-bar
      v-if="testDelete == 0"
      :price="price"
      button-text="提交订单"
      style="margin-bottom: -3px"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar
      v-else
      button-text="删除"
      style="margin-bottom: -3px"
      @submit="onDelete()"
      :price="price"
      class="_delete"
    >
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
    <!-- 底部结束 -->
  </div>
</template>
<style scoped>
._delete div:nth-child(2) {
  opacity: 0;
}
._tuijian-div {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
._tuijian-div-lr {
  width: 48%;
  box-sizing: border-box;
  margin: 1px;
  padding: 1px;
  display: inline-block;
  background: white;
}
._tuijian-div-lr-img {
  width: 94%;
  height: 178px;
  border-radius: 3px;
  margin-bottom: 7%;
  margin-left: 3%;
}
._tuijian-div-lr-img img {
  width: 100%;
  height: 100%;
}
._tuijian-div-lr-bottom {
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
  box-sizing: border-box;
  padding-left: 3%;
}
._lr-bottom-p {
  margin: 5px 0;
  font-size: 14px;
  font-weight: 600;
}
._lr-bottom-top {
  display: block;
  font-size: 12px;
  color: #808080;
}
._lr-bottom-middle-left {
  font-size: 14px;
  color: red;
  font-weight: 600;
}
._lr-bottom-middle-right {
  font-weight: 600;
}
._lr-bottom-bottom {
  display: block;
  font-size: 12px;
  color: #6f6f6f;
}
.container {
  background: #f4f5f7;
  margin-bottom: 50px;
}
._header {
  background: white;
  color: black;
  font-size: 16px;
}
._empty {
  height: 208px;
  text-align: center;
  background: white;
  margin-bottom: 20px;
}
._empty img {
  width: 40%;
}
._empty p {
  font-size: 13px;
  color: #6f6f6f;
  margin-bottom: 20px;
}
._dingdan {
  background: white;
  width: 100%;
  height: 165px;
  border-top: 1px solid #ececec;
  padding-top: 3%;
}
._dingdan-top {
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  padding-bottom: 2%;
}
._dingdan-top-radio {
  display: inline-block;
  width: 10%;
  height: 100px;
  text-align: center;
  padding-top: 10%;
  box-sizing: border-box;
  padding-left: 1%;
}
._dingdan-top-radio-input {
  display: block;
  width: 20px;
}
._dingdan-top-right {
  width: 93%;
  height: 100px;
}
._dingdan-top-huangou {
  width: 100%;
  height: 20px;
  font-size: 12px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
}
._dingdan-top-huangou-img {
  width: 9%;
  margin-right: 2px;
}
._dingdan-top-huangou-a {
  font-size: 13px;
  color: #808080;
  display: inline-block;
  padding-right: 3%;
}
._dingdan-top-xinxi {
  width: 100%;
  height: 70px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
}
._dingdan-top-xinxi-text {
  padding-right: 5%;
  font-size: 13px;
  width: 75%;
  box-sizing: border-box;
}
._dingdan-top-xinxi-img {
  border-radius: 5px;
  width: 21%;
  overflow: hidden;
}
._dingdan-top-xinxi-img img {
  width: 100%;
}
._dingdan-top-xinxi-text-middle {
  display: block;
  font-size: 12px;
  color: #6f6f6f;
  margin-top: 5%;
  margin-bottom: 3%;
}
._dingdan-top-xinxi-text-bottom {
  font-weight: 600;
  display: block;
  color: red;
  font-size: 14px;
}
._dingdan-bottom {
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  border-top: 1px solid #e9e6e6;
  padding-top: 3%;
}
._dingdan-bottom-left {
  font-size: 12px;
  padding-left: 8%;
  display: inline-block;
  line-height: 16px;
}
._dingdan-bottom-right {
  display: inline-block;
  padding-right: 5%;
  box-sizing: border-box;
}
._dingdan-bottom-yufu {
  color: #565656;
}
._dingdan-bottom-yufu span:last-child {
  color: black;
}
._dingdan-bottom-daofu {
  color: #6f6f6f;
}
.buttonborder {
  border-radius: 5px;
  border: 1px solid #cfcdcd;
}
._tuijian {
  width: 100%;
  /* height: px; */
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}
._tuijian > p {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      value: 1,
      // 用在显示隐藏订单
      exist: 0,
      isLoading: true,
      checked: false,
      price: 0,
      useCheck: [],
      result: [],
      username: "",
      order_info: [],
      count: 1,
      bb: "logo.png",
      selectCount: 0,
      selectIds: [],
      checkList: [],
      testDelete: 0,
      goods:[],
      backid:'',
      backpath:''
    };
  },
  methods: {
    _todelete(){
      // console.log(this.testDelete)
      if(this.testDelete==1){
        this.testDelete=0
      }else{
        this.testDelete=1
      }
    },
    radio(i, goods_id) {
      let spansEle = document.getElementsByClassName("jisuan");
      let obj = { name: i, id: goods_id };
      let selectIndex = -1;
      var result = this.checkList.some((item, index) => {
        if (item.name == i) {
          selectIndex = index;
          return true;
        }
        return false;
      });
      if (result == false) {
        this.checkList.push(obj);
        // 当选中时 将数值传给price
        let num = Number(spansEle[i - 1].innerHTML.slice(1)) * 100;
        // console.log(num);
        this.price += num;
      } else {
        // 如果在数组中找到了这个项 那么删除掉
        // 找到这个下标位置中的name值
        // console.log('name'+Number(this.checkList[selectIndex].name))
            // console.log(document.getElementsByClassName('buttonborder').disabled)
            let buttons=document.getElementsByClassName('buttonborder')

            // console.log(1)
        let name = Number(this.checkList[selectIndex].name);
        let num = spansEle[name - 1].innerHTML.slice(1) * 100;
        // console.log("num:" + num);
        if (this.result.length == 0) {
          this.price = 0;
        } else {
          this.price -= num;
        }
        this.checkList.splice(selectIndex, 1);
      }

      // console.log(this.checkList.length);
      // console.log(this.checkList);

      // var result=this.checkList.some((item,index)=>{
      //   if(item.name==i){
      //     return {state:true,index:index}
      //   }else{
      //     return false
      //   }
      // })
      // if(result==false){
      //   this.checkList.push(obj)
      // }else{
      //   this.checkList.splice(result.index,1)
      // }
      // console.log(result==true?'有-删除':'没有-添加')
      // console.log(this.checkList)
    },
    selectedItem(id) {
      //  console.log(this.checked);
    },
    onRefresh() {
      // 刷新组件
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    toshoppingcar() {
      //通过decodeURIComponent解码 获取地址栏内的参数
      let i = decodeURIComponent(location.search).slice(1);
      if(i){
        let j=i
      i = i.split("=")[1];
      if (i == "/") {
        this.$router.push(`${i}`);
      } else if (i == "recommend") {
        this.$router.push(`${i}`);
      }else{
        this.$router.push('/')
      }
      // else {
      //   j=j.split('&')
      //   this.backid=j[1].split('=')[1]
      //   this.backpath=j[0].split('=')[1]
        // console.log(this.backid)
        // console.log(this.backpath)
      //   this.$router.push(`/${this.backpath}?id=${this.backid}`)
      // }
      }
      if(!i){
        this.$router.push('/')
      }
    },
    // 给数量的两个按钮添加监听事件 监听数值的变化
    change() {
      this.count = this.value;
      // console.log(this.count);
    },
    // 复选框组 实现全选反选
    checkAll() {
      if (this.checked == true) {
        this.$refs.checkboxGroup.toggleAll(true);
        let spans = document.getElementsByClassName("jisuan");
        for (var span of spans) {
          // console.log(span.innerHTML.slice(1));
          this.price += Number(span.innerHTML.slice(1))*100;
          // console.log(this.price);
        }
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
      if (this.checked == false) {
        this.$refs.checkboxGroup.toggleAll();
      }
    },
    // 点击去结算 跳转结算页面
    onSubmit() {
      if (this.result.length <= 0) {
        this.$toast({
          message: "请先选中需要结算的商品",
          position: "middle",
          duration: "2000",
        });
      }else{
        this.$router.push(`/topay?price=${this.price/100}&count=${this.result.length}&id=`)
      }
    },
    onDelete() {
      if (this.result.length <= 0) {
        this.$toast({
          message: "请先选中需要删除的数据",
          position: "middle",
          duration: "2000",
        });
      } else {
        let obj = [];
        // console.log(this.checkList);
        for (var item of this.checkList) {
          console.log("获取到需要删除的ID：" + item.id);
          let i = item.name-1;
          obj.push(item.id);
        }

        // console.log("要传递的作为参数的对象：");
        // console.log(obj);
        this.axios.post("/delete", this.qs.stringify(obj)).then((res) => {
          if (res.data.code == 1) {
            // 当删除成功 刷新当前页面
            location.reload([true]);
          } else {
            this.$toast({
              message: "删除失败--请稍后重试",
              position: "middle",
              duration: "2000",
            });
          }
        });
      }
    },
    change(prepay){
      // 尝试在按钮变更时 把值放在price
      
      // let spansEle = document.getElementsByClassName("jisuan");
      
      // console.log(prepay)
      // this.price+=prepay*100
      // let num=spansEle[i].innerHTML.slice(1)
      // console.log(num)
    }
  },
  mounted() {
    this.username = window.localStorage.getItem("uname");
    this.axios
      .get("/shopping_car", { params: { username: this.username } })
      .then((res) => {
        // 如果查找不到 那么返回值的code属性为0
        // 那么显示购物车为空的图片
        if (res.data.code == 0) {
          this.exist = 0;
          // console.log('失败')
        } else {
          // 反之 如果搜索到，把搜索到的值传入到localStorage
          this.exist = 1;
          let i = res.data.info;
          // console.log('成功')
          // console.log(i)
          // for (let index = 0; index < res.data.info.length; index++) {
          //  this.result.push(
          //     {
          //       checked:"true"
          //     })
          // }
          // console.log(this.result);
          // console.log(this.useCheck)
          //以字符串形式存入localStorage
          window.localStorage.setItem("info", JSON.stringify(i));
          //转为数组形式
          this.order_info = JSON.parse(localStorage.getItem("info"));
          // console.log(this.order_info[0].goods_img)
          // console.log(this.order_info);
        }
      });
    if (
      window.localStorage.getItem("islogined") == null ||
      window.localStorage.getItem("islogined") != 1
    ) {
      // console.log("此时未登录。需要跳转到登录页面");
      this.$router.push("/login");
    } else {
      // 正常显示购物车页面
      // console.log("此时已登录");
    }

    this.axios.get('/post').then((res)=>{
      if(res.data.code==1){
        // console.log('OK')
        // console.log(res.data.info)
        this.goods=res.data.info
        // console.log(this.goods)
      }else{
        // console.log('ERR')
      }
    })
  },
  watch: {
    result() {
      // console.log(
      //   "此时的result " + this.result + " 格式 " + typeof this.result
      // );
      // console.log(this.result.length);
      // console.log(this.order_info.length);
      if (this.result.length == this.order_info.length) {
        this.checked = true;
        // console.log(this.checked);
      } else {
        this.checked = false;
        // console.log(this.checked);
      }
      if (this.result.length == 0) {
        this.price = 0;
      }
      let spansEle = document.querySelectorAll(".jisuan");
      // console.log(spansEle.length)
      // console.log(this.result.length)
      // console.log(this.result);
      for (var r of this.result) {
        let num = Number(spansEle[r - 1].innerHTML.slice(1));
      }

      // for (var j2 = 0; j2 <= this.result.length; j2++) {
      //   if (i == this.result[j2]) {
          // console.log("此时第" + i + "个选项被选中");
      //     let spansEle = document.querySelectorAll(".jisuan");
      //     let num = Number(spansEle[i - 1].innerHTML.slice(1));
      //     this.price += num;
      //   }
      // }

      // 如果某个选项被选中，那么找到这个选项下的span的值 加到price
      // 首先在result中寻找这个选项
      // 遍历result数组

      // 如果某个选项没有被选中，那么在price这个选项中减掉这个值
    },
  },
};
</script>