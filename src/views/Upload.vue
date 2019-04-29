<template>
  <div class="upload">
    <el-upload class="upload-demo" drag action="/api/posts/" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <br>
    <br>
    <el-upload
      class="upload-demo"
      action="/api/posts/"
      :on-change="handleChange"
      :file-list="fileList3"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList3: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
    };
  },
  methods: {
    beforeAvatarUpload() {},
    handleAvatarSuccess() {},
    handleChange(file,fileList){
        console.log(file,fileList);
    }
  }
};
</script>
<style scoped>
.upload-demo{
    background: #fff
}
</style>
