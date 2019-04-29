<template>
  <div class="header">
    <el-tooltip :content="collapse?'展开侧边栏':'收缩侧边栏'" placement="bottom">
      <div class="collapse-btn" @click="changeCollapse">
        <i class="el-icon-menu"></i>
      </div>
    </el-tooltip>
    <div class="logo">
      <img :src="imgSrc" alt="logo">
    </div>
    <div class="title">
      <span>后台管理系统</span>
    </div>
    <div class="header-right">
      <div class="user-tools">
        <div class="fullscreen-btn" @click="handFullscreen">
          <el-tooltip :content="fullScreen?'取消全屏':'全屏'" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <div class="bell-btn">
          <el-tooltip :content="message?`您有${message}条未读消息`:`消息中心`" placement="bottom">
            <router-link to>
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="bell-badge" v-if="message"></span>
        </div>
        <div class="user-avator">
          <img :src="userSrc" alt="用户头像">
        </div>
        <el-dropdown trigger="click" @command="handCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="https://www.cnblogs.com/samsara-yx/" target="_blank">
              <el-dropdown-item icon="fa fa-forumbee">博客</el-dropdown-item>
            </a>
            <a href="https://github.com/yangxinSamsara" target="_blank">
              <el-dropdown-item icon="fa fa-github">Github</el-dropdown-item>
            </a>
            <el-dropdown-item icon="el-icon-close" command="loginout" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import imgSrc from "../assets/logo.png";
import bus from "../common/bus.js";
export default {
  data() {
    return {
      collapse: false,
      imgSrc: imgSrc,
      userSrc: imgSrc,
      fullScreen: false,
      message: 2,
      username:JSON.parse(localStorage.getItem('username')).username
    };
  },
  created() {
    bus.$on('unread',(val)=>{
      this.message=val
    })
  },
  mounted() {
    if (document.body.clientWidth <= 1300) {
      this.changeCollapse();
    }
  },
  methods: {
    changeCollapse() {
      this.collapse = !this.collapse;
      bus.$emit("changec", this.collapse);
    },
    handFullscreen() {
      let element = document.documentElement;
      if (this.fullScreen) {
        if (document.exitFullscreen) {
          //W3C
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          //FIREFOX
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          //CHROME
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          //MSIE
          document.msExitFullscreen();
        } else if (document.oRequestFullscreen) {
          document.oCancelFullScreen();
        }
      } else {
        if (element.requestFullscreen) {
          //W3C
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          //FIREFOX
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
          //CHROME
          element.webkitRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          //MSIE
          element.msRequestFullscreen();
        } else if (element.oRequestFullscreen) {
          element.oRequestFullscreen();
        }
      }
      this.fullScreen = !this.fullScreen;
    },
    handCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem('username');
        this.$router.push('/login')
      }
    }
  }
};
</script>
<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 60px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  line-height: 60px;
  cursor: pointer;
  background: #090909;
  padding: 0 19px;
}
.logo {
  float: left;
  width: 60px;
  height: 60px;
  background: #090909;
}
.logo img {
  width: 100%;
  height: 100%;
}

.title {
  float: left;
  width: 130px;
  height: 100%;
  background: #090909;
  color: #fff;
  font-size: 16px;
  line-height: 60px;
}

.header-right {
  float: right;
  padding-right: 10px;
  height: 60px;
}

.user-tools {
  display: flex;
  height: 100%;
  align-items: center;
}

.fullscreen-btn {
  cursor: pointer;
}

.bell-btn {
  margin: 0 20px;
  position: relative;
}

.bell-btn a {
  color: #fff;
}

.bell-btn .bell-badge {
  font-size: 14px;
  background: #f56c6c;
  position: absolute;
  top: -1px;
  right: -2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.user-avator {
  width: 40px;
  height: 40px;
  margin: 0 20px 0 0;
}

.user-avator img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.el-dropdown {
  color: #fff;
  cursor: pointer;
}
</style>
