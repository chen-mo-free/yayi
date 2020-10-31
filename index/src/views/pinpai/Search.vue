<template>
  <div>
    <!-- 顶部搜索框 -->
    <div>
      <form action="">
        <van-search
          id="chatpannel"
          v-model="value"
          show-action
          shape="round"
          type="search"
          name="feng"
          list="feng"
          placeholder="牙齿矫正需要什么？"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>

    <!-- 最近搜索 -->
    <div v-show="values.length != 0" class="search_border">
      <div class="search_wenben">
        <div class="search_top">
          <span>最近搜索</span>
          <span @click="shanchu"
            ><img src="http://127.0.0.1:3000/img/_cjs/shanchu.png"
          /></span>
        </div>
        <span v-for="(v, k) of values" :key="k" class="van-ellipsis">{{
          v
        }}</span>
      </div>
    </div>

    <!-- 热门搜索 -->
    <div class="search_border">
      <div class="search_wenben">
        <div class="search_top">热门搜索</div>
        <div>
          <router-link
            v-for="(item, index) of re"
            :key="index"
            :to="item.path"
            class="van-ellipsis"
          >
            <span>{{ item.sou }}</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 常用分类 -->
    <div class="search_wenben">
      <div class="search_top">常用分类</div>
      <div class="search_background">
        <router-link
          v-for="(item, index) of fenlei"
          :key="index"
          :to="item.path"
          class="search_link"
        >
          <span>{{ item.lei }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 最近搜索样式+热门搜索样式 */
.search_wenben {
  width: 95%;
  margin: auto;
}
.search_top {
  display: flex;
  justify-content: space-between;
  margin: 10px auto 10px;
  font-family: Verdana, Geneva, sans-serif;
  font-weight: bold;
}
.van-ellipsis {
  display: inline-block;
  width: 19%;
  height: 20px;
  background-color: #f2f3f5;
  border-radius: 15px;
  margin: 5px 5px;
  padding: 2px 5px;
  text-align: center;
  line-height: 22px;
  font-size: 13px;
  color: #000;
}
.search_border {
  border-bottom: 5px solid #f3f8f7;
}
/* 常用分类样式 */
.search_link {
  display: inline-block;
  width: 19%;
  height: 69px;
  background-color: #fcf6f8;
  border-radius: 50%;
  margin: 5px 5px;
  padding: 2px 5px;
  text-align: center;
  line-height: 69px;
  font-size: 13px;
  color: #000;
}
.search_background > a:nth-child(2n) {
  background-color: #f3f8fb;
}
.search_background > a:nth-child(3n) {
  background-color: #fcf8ec;
}
</style>

<script>
export default {
  data() {
    return {
      value: "",
      values: [],
      re: [
        { sou: "美牙宝典", path: "/tooth" },
        { sou: "齿科专场", path: "/beautify" },
        { sou: "齿科大咖", path: "/tooth" },
        { sou: "齿科狂欢", path: "/tooth" },
        { sou: "品牌机构", path: "/brand" },
      ],
      fenlei: [
        { lei: "洗牙", path: "/tooth_washing" },
        { lei: "牙齿矫正", path: "/dental_implant" },
        { lei: "牙齿美白", path: "/e_max" },
        { lei: "牙齿治疗", path: "/lnvisible_correction" },
        { lei: "隐形矫正", path: "/orthodontics" },
        { lei: "牙贴面", path: "/skin_whitening" },
        { lei: "全瓷牙", path: "/treatment" },
        { lei: "种植牙", path: "/veneer" },
      ],
      option:[{opn:"牙齿矫正",path:"/"},{opn:"洗牙/洁牙排行榜",path:"/"},{opn:"洗牙",path:"/"},{opn:"牙齿美白",path:"/"},{opn:"种植牙",path:"/"},{opn:"补牙",path:"/"},{opn:"牙贴面",path:"/"},{opn:"牙套",path:"/"},{opn:"牙齿",path:"/"},{opn:"牙齿贴面",path:"/"},{opn:"整牙",path:"/"},{opn:"洁牙",path:"/"},{opn:"隐形牙套",path:"/"},{opn:"拔牙",path:"/"},{opn:"烤瓷牙",path:"/"},{opn:"牙齿冷光美白",path:"/"},{opn:"种牙",path:"/"},{opn:"全瓷牙",path:"/"},{opn:"牙齿正畸",path:"/"},{opn:"超声波洗牙",path:"/"}]
    };
  },
  methods: {
    onSearch(val) {
      this.value = val;
      // console.log(this.value);
      this.values.unshift(val);
    },
    onCancel() {
      
    },
    shanchu() {
      // console.log(this.values);
      this.values = [];
    },
    focus: function () {
      let $this = this;
      setTimeout(function () {
        let pannel = document.getElementById("chatpannel");
        pannel.scrollIntoView(true);
      }, 200);
    },
  },
  mounted(){
    let i =location.search
    i=i.split(1)
    // console.log(i)
  }
};
</script>
