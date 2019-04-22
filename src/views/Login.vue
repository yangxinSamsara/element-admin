<template>
  <div class="login" :style="{backgroundImage: 'url(' + img + ')'}">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>Samsara后台管理系统</h3>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd" class="pwd">
          <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item class="title">
          <p style="text-align:right">
            用户名和密码随便填
            <span style="color:red">(必填)</span>
          </p>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import loginImg from "../assets/login.png";
export default {
  data() {
    return {
      img: loginImg,
      ruleForm: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "恭喜你，登录成功！",
            type: "success"
          });
          localStorage.setItem('username',JSON.stringify(this.ruleForm))
          setTimeout(() => {
              this.$router.push('/')
          }, 500);
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
.login {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.box-card {
  width: 460px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.pwd {
  margin-bottom: 5px;
}

.title {
  margin-bottom: 10px;
}

.btns {
  margin-left: 90px;
}
</style>
