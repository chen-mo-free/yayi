<template>
  <div class="_container">
    <mt-header class="_header" title="修改昵称">
      <mt-button slot="left" icon="back" @click="back"></mt-button>
      <mt-button slot="right" class="_header-button" @click="baocun"
        >保存</mt-button
      >
    </mt-header>
    <div class="_textareadiv">
      <textarea
        class="_textarea"
        placeholder="请输入昵称"
        maxlength="10"
        v-model="length"
      ></textarea>
      <div class="_positiondiv">
        <span v-if="this.length.length < 10">{{ length.length }}</span
        ><span v-else style="color: red">{{ length.length }}</span
        ><span v-if="this.length.length < 10">/10</span>
        <span v-else style="color: red">/10</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
._positiondiv {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: aquamarine;
}
._container {
  background: #f4f5f7;
  height: 667px;
}
._textareadiv {
  position: relative;
}
._textarea {
  border: 0;
  background: white;
  width: 100%;
  height: 200px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  color: #808080;
}
._header {
  background: white;
  color: black;
}
._header-button {
  color: #808080;
  font-size: 13px;
}
</style>
<script>
export default {
  data() {
    return {
      length: "",
      isrun: false,
      i: 0,
    };
  },
  mounted() {},
  methods: {
    inputing(e) {
      // console.log(e.data.length);
    },
    back() {
      this.$router.push("/data");
    },
    baocun() {
      window.localStorage.setItem("nicheng", this.length);
      this.$router.push("/data");
      let obj = {
        username: window.localStorage.getItem("user"),
        nicheng: this.length,
      };
      let rrr = false;
      this.axios.post("/nicheng", this.qs.stringify(obj)).then((res) => {
        if (res.data.code == 1) {
          // console.log("OK");
          rrr = true;
        } else {
          rrr = false;
          // console.log("ERROR");
        }
      });
      let username = window.localStorage.getItem("user");
      if ((rrr = true)) {
        window.setTimeout(() => {
          this.axios
            .get("/select", { params: { username: username } })
            .then((res) => {
              if (res.data.code == 1) {
                //刷新当前页面
                location.reload([true]);
                window.localStorage.setItem(
                  "user_info",
                  JSON.stringify(res.data.info)
                );
              }
            });
        }, 100);
      }
    },
  },
};
</script>