<template>
  <div class="tabs">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
        <el-table :data="unread" :show-header="false">
          <el-table-column>
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" width="180"></el-table-column>
          <el-table-column width="150">
            <template slot-scope="scope">
              <el-button size="small" type="primary" @click="markRead(scope.$index)">标记为已读</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane :label="`已读消息(${read.length})`" name="second">
        <el-table :data="read" :show-header="false">
          <el-table-column>
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" width="180"></el-table-column>
          <el-table-column width="150">
            <template slot-scope="scope">
              <el-button size="small" type="danger" @click="deleteRead(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
        <el-table :data="recycle" :show-header="false">
          <el-table-column>
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" width="180"></el-table-column>
          <el-table-column width="150">
            <template slot-scope="scope">
              <el-button size="small" type="warning" @click="recycleRead(scope.$index)">还原</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="end">
          <el-col :span="4" :offset="20">
            <el-button class="mg38" type="danger" @click="deleteAll()">清空回收站</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import bus from '../common/bus'
export default {
  data() {
    return {
      activeName: "first",
      unread: [
        {
          date: "2019-04-28 20:00:00",
          title: "【Samsara后台】五一放假四天该系统将停止维护"
        },
        {
          date: "2019-04-19 21:00:00",
          title: "【Samsara后台】bug终于改完了,今晚可以早点回家了,好开心！！！"
        }
      ],
      read: [
        {
          date: "2019-04-01 20:00:00",
          title: "【Samsara后台】测试人员提出了一大堆bug,改不完开发人员不能下班"
        }
      ],
      recycle: [
        {
          date: "2019-04-05 20:00:00",
          title: "【Samsara后台】今日系统将发布到测试环境请测试人员抓紧测试"
        }
      ]
    };
  },
  methods: {
    markRead(index) {
      const item = this.unread.splice(index, 1);
      this.read = item.concat(this.read);
      bus.$emit('unread',this.unread.length)
    },
    deleteRead(index) {
      const item = this.read.splice(index, 1);
      this.recycle = item.concat(this.recycle);
    },
    recycleRead(index) {
      const item = this.recycle.splice(index, 1);
      this.read = item.concat(this.read);
    },
    deleteAll() {
      this.recycle = [];
    }
  }
};
</script>
<style scoped>
.mg38 {
  margin: 3% 38%;
}
</style>
