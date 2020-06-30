<template>
  <div class="l-login">
    <a-form-model class="l-login-container" ref="form" :rules="rules" :model="form">
      <a-form-model-item prop="username">
        <a-input v-model="form.username">
          <a-icon type="user" slot="addonBefore" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password">
        <a-input-password v-model="form.password" :visibility-toggle="false">
          <a-icon type="lock" slot="addonBefore" />
        </a-input-password>
      </a-form-model-item>
      <a-form-model-item :wrapperCol="{span: 5, offset: 19}">
        <a-button icon="login" type="primary" @click="onSubmit" :loading="loading">登录</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  name: "l-login",
  data () {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {required: true, message: "请输入用户名"}
        ],
        password: [
          {required: true, message: "请输入密码"},
          {min: 8, message: "密码必须大于8位"},
          {max: 18, message: "密码必须小于18位"},
          {pattern: /^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{8,18}$/, message: "密码必须包含字母、数字"},
        ]
      },
      loading: false
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if(valid){
          this.loading = true;
          this.$store.dispatch("user/login", this.form).then(() => {
            this.$router.push({path: "/"});
            this.loading = false;
          }).catch(() => {
            this.loading = false;
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.l-login {
  width: 100vw;
  height: 100vh;
  position: relative;
  .l-login-container {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>