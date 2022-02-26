<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png"
         alt=""
         class="wrapper__img" />
    <div class="wrapper__input">
      <input type="text"
             class="wrapper__input__content"
             placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input type="text"
             class="wrapper__input__content"
             placeholder="请输入密码" />
    </div>
    <div class="wrapper__login-button"
         @click="handleLogin">登录</div>
    <div class="wrapper__login-link">立即注册</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const handleLogin = () => {
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    }
    return { handleLogin }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    height: 0.48rem;
    padding: 0 0.16rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    &__content {
      width: 100%;
      border: none;
      outline: none;
      line-height: 0.48rem;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    height: 0.48rem;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    background: #0091ff;
    box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    font-size: 0.16rem;
    color: #ffffff;
    text-align: center;
    line-height: 0.48rem;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
