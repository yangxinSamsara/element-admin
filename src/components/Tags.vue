<template>
  <div class="tags">
    <ul>
      <li
        class="tags-li"
        v-for="(item,index) in tagsList"
        :key="item.path"
        :class="{'active':isActive(item.path)}"
      >
        <router-link :to="item.path">{{item.title}}</router-link>
        <span class="tag-li-icon" @click="deleteTag(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
    <div class="tags-delete">
      <el-dropdown size="mini" split-button type="primary" @command="closeTags" trigger="click">
        关闭选项
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      tagsList: []
    };
  },
  created() {
    //设置标签
    this.setTags(this.$route);
  },
  methods: {
    setTags: function(route) {
      const isExist = this.tagsList.some(item => {
        return item.path == route.fullPath;
      });
      if (!isExist) {
          if(this.tagsList.length>9){
              this.tagsList.shift()
          }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath
        });
      }
      bus.$emit("tags", this.tagsList);
    },
    isActive(path) {
      return path == this.$route.fullPath;
    },
    //删除当前标签
    deleteTag(index) {
      if (this.tagsList.length > 1) {
        const delItem = this.tagsList.splice(index, 1)[0];
        const item = this.tagsList[index]
          ? this.tagsList[index]
          : this.tagsList[index - 1];
        if (item) {
          delItem.path === this.$route.fullPath && this.$router.push(item.path);
        } else {
          this.$router.push("/");
        }
      } else {
        this.$notify({
          title: "警告",
          message: "只剩下一个tab，不能删除！",
          type: "warning"
        });
      }
    },
    closeTags(cm) {
      
      if (cm == "other") {
        let curItem = this.tagsList.filter(item => {
          return item.path == this.$route.fullPath;
        });
        this.tagsList = curItem;
      } else {
        if (this.tagsList.length == 1 && this.tagsList[0].path == "/index") {
          return;
        }
        this.tagsList = [];
        this.$router.push({ path: "/" });
      }
    }
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  }
};
</script>
<style scoped>
.tags {
  position: relative;
  height: 30px;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  height: 100%;
  width: 100%;
}

.tags-li {
  float: left;
  list-style: none;
  height: 23px;
  line-height: 23px;
  margin: 2px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #6f6f6f;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease-in;
}

.tags-li a {
  color: #6f6f6f;
}

.tags-li.active {
  background: #10a6ed;
  color: #fff;
}

.tags-li:not(.active):hover {
  background: #ccc;
}

.tags-delete {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
