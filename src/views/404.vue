<template>
  <div class="notfound">
    <img :src="notfoundImg" alt="404，页面找不到！">
  </div>
</template>
<script>
import notfoundImg from "../assets/404.png";
export default {
  data() {
    return {
      notfoundImg: notfoundImg
    };
  }
};
</script>
<style scoped>
.notfound {
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
.notfound img{
    width: 100%;
    height: 100%;
}
</style>
