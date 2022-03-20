<template>
  <div class="wrapper"></div>
  <div class="user">
    <img
      src="https://serverless-project-static-files.oss-cn-beijing.aliyuncs.com/apiServerImages/avatar.jpg"
      alt=""
      class="user__img"
    />
    <div class="user__name">热心市民李先生</div>
    <div class="user__id">ID: 1069643013</div>
    <div class="user__discount">
      <div class="user__discount__item">
        <div class="user__discount__item__title">红包</div>
        <div class="user__discount__item__count">218</div>
      </div>
      <div class="user__discount__item">
        <div class="user__discount__item__title">红包</div>
        <div class="user__discount__item__count">218</div>
      </div>
      <div class="user__discount__item">
        <div class="user__discount__item__title">红包</div>
        <div class="user__discount__item__count">218</div>
      </div>
      <div class="user__discount__item">
        <div class="user__discount__item__title">红包</div>
        <div class="user__discount__item__count">218</div>
      </div>
    </div>
  </div>
  <div class="setting">
    <router-link :to="{ name: 'Address' }">
      <div class="setting__item">
        <div class="setting__item__left">
          <div class="setting__item__icon iconfont">&#xe619;</div>
          我的地址
        </div>
        <div class="setting__item__expand iconfont">&#xe601;</div>
      </div>
    </router-link>
  </div>
  <Docker :currentIndex="3" />
</template>

<script>
import Docker from '../../components/Docker.vue'
export default {
  name: 'Mine',
  components: { Docker },
  setup() {},
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
  height: 2.5rem;
}
.user {
  margin: -1.5rem 0.16rem 0 0.16rem;
  background: #ffffff;
  box-shadow: 0 0.08rem 0.16rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.08rem;
  text-align: center;
  &__img {
    width: 0.94rem;
    height: 0.94rem;
    border-radius: 50%;
    margin-top: -0.47rem;
  }
  &__name {
    font-size: 0.24rem;
    color: #262628;
    line-height: 0.36rem;
  }
  &__id {
    font-size: 0.14rem;
    color: #c1c0c9;
    margin-bottom: 0.12rem;
  }
  &__discount {
    display: flex;
    border-top: 0.01rem solid #f1f1f1;
    padding: 0.12rem 0 0.16rem 0;
    &__item {
      flex: 25%;
      &__title {
        font-size: 0.12rem;
        color: #c1c0c9;
        text-align: center;
        margin-bottom: 0.03rem;
      }
      &__count {
        font-size: 0.2rem;
        color: #262628;
        text-align: center;
      }
    }
  }
}
.setting {
  background: #ffffff;
  box-shadow: 0 0.08rem 0.16rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.08rem;
  margin: 0.16rem;
  padding: 0.04rem 0;
  a {
    text-decoration: none;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    font-size: 0.14rem;
    color: #262626;
    padding: 0.12rem;
    line-height: 0.2rem;
    &__left {
      display: flex;
    }
    &__icon {
      width: 0.22rem;
      height: 0.22rem;
      border-radius: 0.08rem;
      background: #32c5ff;
      color: #fff;
      text-align: center;
      margin-right: 0.12rem;
    }
    &__expand {
      transform: rotate(180deg);
      color: #c2c4ca;
    }
  }
}
</style>
