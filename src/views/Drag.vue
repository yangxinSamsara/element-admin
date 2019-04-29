<template>
  <div class="drag">
    <el-row>
      <el-col :span="6">
        <h2>代办列表</h2>
        <draggable v-model="todoList" :move="handRemove">
          <transition-group>
            <div class="item" v-for="element in todoList" :key="element.id">{{element.name}}</div>
          </transition-group>
        </draggable>
      </el-col>
      <el-col :span="6">
        <h2>完成列表</h2>
        <draggable v-model="doneList" :move="handRemove" draggable=".item">
          <transition-group>
            <div class="item" v-for="element in doneList" :key="element.id">{{element.name}}</div>
          </transition-group>
        </draggable>
      </el-col>
      <el-col :span="6">
        <h2>代办数据</h2>
        <pre>{{JSON.stringify(todoList,null,2)}}</pre>
      </el-col>
      <el-col :span="6">
        <h2>完成数据</h2>
        <pre>{{JSON.stringify(doneList,null,2)}}</pre>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      todoList: [
        { id: 1, name: "菜单--首页" },
        { id: 2, name: "菜单--图表" },
        { id: 3, name: "菜单--文件上传" },
        { id: 4, name: "菜单--编辑器" }
      ],
      doneList: [
        { id: 1, name: "项目搭建" },
        { id: 3, name: "头部折叠切换" },
        { id: 2, name: "侧边栏菜单" }
      ]
    };
  },
  components: { draggable },
  methods: {
      handRemove(e){
          console.log(e);
      }
  },
};
</script>
<style scoped>
.el-col {
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 20%;
  margin: 10px;
}

h2 {
  border-bottom: 1px solid #ccc;
}

.item {
  margin: 5px;
  height: 25px;
  background: #ccc;
  border-radius: 5px;
  cursor: pointer;
}
</style>
