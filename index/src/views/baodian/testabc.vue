<template>
  <div @click="abcd">
    <input type="text">
    <!-- <button>按钮</button> -->
  </div>
</template>
<script>
export default {
  methods:{
  abcd(){
    this.$router.push('/')
  }
}
}
</script>>