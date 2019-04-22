<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in menuList">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import Alldata from "../common/data";
import bus from "../common/bus.js";
export default {
  data() {
    return {
      menuList: "",
      collapse: false
    };
  },
  created() {
    this.menuList = Alldata.menuList;
    console.log(this.menuList);
    //这里要使用箭头函数写法
    bus.$on("changec", (val)=>{
      this.collapse=val
    });
  },
  computed: {
    onRoutes:function(){
      return this.$route.path.replace('/','')
    }
  },
};
</script>
<style scoped>
.sidebar {
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar ul {
  height: 100%;
}

.sidebar ul li i {
  font-size: 18px;
  margin-right: 5px;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
</style>
