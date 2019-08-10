<template>
  <div class="page register">
    <div class="head-icon">
      <a href><</a>
    </div>

    <div class="login">
      <h3>会员注册</h3>
      <div class="content">
        <form>
          <div class="form">
            <label>
              <input
                name="loginname"
                data-vv-as="手机号"
                type="text"
                placeholder="请输入手机号"
                class="tel"
                aria-required="true"
                aria-invalid="true"
              />
              <span class="is-danger" style>手机号是必须的</span>
              <!---->
            </label>
            <label>
              <input
                name="loginpwd"
                data-vv-as="密码"
                placeholder="请输入密码"
                type="password"
                class="pwd"
                aria-required="true"
                aria-invalid="true"
              />
              <span class="is-danger" style>密码是必须的</span>
              <i class="hidePwd-icon"></i>
            </label>
            <label>
              <input
                name="loginimagecode"
                data-vv-as="验证码"
                type="text"
                maxlength="6"
                placeholder="验证码"
                class="telCode"
                aria-required="true"
                aria-invalid="false"
              />
              <span class="is-danger" style="display: none;"></span>
              <!---->
              <a href="javascript:;" class="obtain-code red">获取验证码</a>
            </label>
            <div>
              <div>
                <input type="hidden" name="geetest_challenge" />
                <input type="hidden" name="geetest_validate" />
                <input type="hidden" name="geetest_seccode" />
              </div>
            </div>
          </div>
        </form>
        <div class="login-btn tc white mt30">注 册</div>
      </div>
      <div class="foot">
        <!-- <router-view></router-view>
        <router-link to="login" tag="a" class="go-register">
          马上登录
        </router-link> -->
        <a href="#" class="go-register" @click="handleClickLogin()">马上登录</a>
        <p>
          登录注册表示同意
          <a href="javascript:;">永乐票务用户服务协议</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  methods:{
    handleClickLogin(){
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
html {
  font-size: 100px;
}
.register {
  width: 100%;
  height: 6.51rem;
  color: aliceblue;
  /* background: url(../img/loginBg.jpg) no-repeat; */
  background-size: 100%;
}
.head-icon {
  width: 3.41rem;
  height: 0.31rem;
  font-size: 0.28rem;
  margin-left: 0.15rem;
  padding-top: 0.29rem;
  color: #cccccc;
}
.head-icon a {
  text-decoration: none;

  color: #cccccc;
}
.login {
    margin: 0.3rem 0.5rem 0;
}
.login h3 {
    color: #fff;
    font-size: 0.32rem;
    margin-bottom: 0.3rem;
    font-weight: bold;
}
form {
    display: block;
    margin-top: 0em;
}
.form label {
    display: block;
    position: relative;
    font-size: 0.12rem;
    margin-bottom: 0.2rem;
}
.form label input.tel {
    background-size: 0.85rem;
    background-position: 0.2rem -2.345rem;
}
.form label input {
    height: 0.44rem;
    width: calc(100% - 0.5rem);
    border: 0.01rem solid rgba(255, 255, 255, .6);
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0);
    text-align: center;
    color: rgba(255, 255, 255, .9);
    font-size: 0.16rem;
    padding: 0 0.3rem 0 .2rem;
}
.form label .is-danger {
    text-align: center;
    position: absolute;
    bottom: -.18rem;
    width: 100%;
    font-size: .12rem;
}
.form label input.pwd {
    background-size: 0.85rem;
    background-position: 0.2rem -2.67rem;
}
.form label i.hidePwd-icon {
    background-size: 0.85rem;
    background-position: 0 -1.17rem;
}
.form label i {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    background: #FF2959;
    top: 0.075rem;
    right: 0; 
}
.form label input.telCode {
    padding-right: 1rem;
    width: calc(100% - 1.2rem);
    background-size: 0.85rem;
    background-position: 0.2rem -3rem;
}
.form label .obtain-code, .form label .obtain-codes {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    font-size: 0.13rem;
    width: 1rem;
    height: 0.45rem;
    text-align: center;
    line-height: 0.45rem;
}
.login-btn {
    height: 0.45rem;
    width: 100%;
    background: rgba(255, 255, 255, .7);
    color: #fff;
    border-radius: 1rem;
    opacity: 0.8;
    font-size: 0.16rem;
    line-height: 0.45rem;
}
.mt30 {
    margin-top: 0.3rem;
}
.tc {
    text-align: center;
}
.foot {
    margin-top: 0.8rem;
    width: 100%;
    text-align: center;
    margin-bottom: 0.4rem;
}
.foot .go-register {
    font-size: 0.14rem;
    margin-bottom: 0.4rem;
    display: block;
}
.foot a {
    color: #ff3a56;
    text-decoration: underline;
}
.foot p {
    color: rgba(255, 255, 255, 0.4);
    font-size: .11rem;
}
.foot p a {
    color: rgba(255, 58, 86, 0.6);
    font-size: .11rem;
}
</style>