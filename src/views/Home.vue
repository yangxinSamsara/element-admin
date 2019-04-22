<template>
  <div class="home">
    <yx-header></yx-header>
    <yx-sidebar></yx-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <yx-tags></yx-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import yxHeader from "../components/Header";
import yxSidebar from "../components/Sidebar";
import yxTags from "../components/Tags";
import bus from "../common/bus.js";
export default {
  data() {
    return {
      collapse: false,
      tagsList: []
    };
  },
  created() {
    bus.$on("changec", val => {
      this.collapse = val;
    });
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on("tags", tagsList => {
      let arr = [];
      for (let i = 0; i < tagsList.length; i++) {
        tagsList[i].name && arr.push(tagsList[i].name);
      }
      this.tagsList = arr;
    });
  },
  components: { yxHeader, yxSidebar, yxTags }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
