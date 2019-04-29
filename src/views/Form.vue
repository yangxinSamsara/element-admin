<template>
  <div class="form">
    <el-form :model="form" ref="form" :rules="rules" label-width="135px">
      <el-form-item label="活动名称" prop="activityName">
        <el-input v-model="form.activityName" placeholder="请输入活动名称"></el-input>
      </el-form-item>
      <el-form-item label="活动地址" prop="activityAddress">
        <el-input v-model="form.activityAddress" placeholder="请输入活动地址"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="activityArea">
        <el-select v-model="form.activityArea" placeholder="请选择活动区域">
          <el-option
            v-for="area in areas"
            :key="area.value"
            :label="area.label"
            :value="area.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动方式" prop="styles">
        <el-checkbox-group v-model="form.styles">
          <el-checkbox v-for="style in styles" :key="style.value" :label="style.value">{{style.label}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="活动天数" prop="activityDays">
        <el-input v-model.number="form.activityDays" placeholder="请输入活动天数"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    const checkDay = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("天数不能为空"));
      }
      
    //   if (!Number.isInteger(Number(value))) {//如果v-model没加number修饰的话这里用Number转换
      if (!Number.isInteger(value)) {
        callback(new Error("天数必须为数字"));
      } else {
        callback();
      }
    };
    return {
      areas: [
        { label: "区域一", value: "1" },
        { label: "区域二", value: "2" },
        { label: "区域三", value: "3" }
      ],
      styles: [
        { label: "方式一", value: "11" },
        { label: "方式二", value: "22" },
        { label: "方式三", value: "33" }
      ],
      form: {
        activityName: "",
        activityAddress: "",
        activityArea: "",
        styles: []
      },
      rules: {
        activityName: [
          { required: true, message: "活动名称不能为空", trigger: "blur" }
        ],
        activityAddress: [
          { required: true, message: "活动地址不能为空", trigger: "blur" }
        ],
        activityArea: [
          { required: true, message: "活动区域不能为空", trigger: "change" }
        ],
        styles: [
          { required: true, message: "活动方式不能为空", trigger: "change" }
        ],
        activityDays: [{ validator: checkDay, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.form);
          const html='<span class="word-wrap" style="word-break: break-all">'+JSON.stringify(this.form)+'</span>'
          this.$alert(html, '提交内容', {
          dangerouslyUseHTMLString: true
        });
        setTimeout(() => {
            this.$refs[formName].resetFields();
        }, 1000);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.form {
  width: 60%;
  margin: 10px auto;
  background: #fff;
  padding: 20px 10px;
}
.el-select {
  display: block;
  width: 80%;
}
.el-input {
  width: 80%;
}
</style>
