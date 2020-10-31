<template>
     <div>
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show">
          <mt-header title="数据说明" fixed>
          </mt-header>
        </van-popup>
     </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>