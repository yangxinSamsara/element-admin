<template>
    <div class="markdown">
         <mavon-editor v-model="mdValue" @save="handSave" @change="handChange" style="height: 100%"></mavon-editor>
         <el-row style="margin-top:10px">
           <el-col :span="4" :offset="10"><el-button @click="getData" type="primary">获取数据</el-button></el-col>
           <el-col :span="4" :offset="5">
              <a href="https://github.com/hinesboy/mavonEditor" target="_blank" rel="noopener noreferrer">
              <el-button type="info">点击查看更多mavon-editor</el-button>
              </a>
           </el-col>
         </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mdValue:''
        }
    },
    methods: {
        getData(){
            console.log(this.mdValue)
        },
        handSave(val,render){
            console.log(val,render);
        },
        handChange(val,render){
            console.log(val,render);

        }
    },
}
</script>
<style scoped>

</style>
