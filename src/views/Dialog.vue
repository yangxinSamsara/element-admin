<template>
  <div class="dialog">
    <el-button @click="open" type="primary">点击出现弹出框</el-button>
    <el-dialog v-dialogDrag title="弹出框" :visible.sync="dialogVisible">
      <span>试试拖动我，我是一个可以拖动的弹出框</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    }
  }
};
</script>
<style scoped>
</style>
