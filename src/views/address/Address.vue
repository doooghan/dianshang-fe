<template>
  <div class="wrapper">
    <Header title="管理收货地址" rightContent="创建" />
    <div class="address">
      <div class="address__title" @click="handleClick">我的收货地址</div>
      <router-link :to="{ path: `/addressUpdate/1` }">
        <div class="address__item">
          <div class="address__left">
            <div class="address__info">
              <div class="address__info__name">小花</div>
              <div class="address__info__tel">18911023261</div>
            </div>
            <div class="address__content">
              北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层
            </div>
          </div>
          <div class="address__expand iconfont">&#xe601;</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Header from '../../components/Header.vue'
export default {
  name: 'Address',
  components: { Header },
  setup() {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    // 测试
    const handleClick = () => {
      router.push({ name: 'AddressCreate' })
    }
    return { handleBackClick, handleClick }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $bgColor-gray;
}
.address {
  padding: 0.16rem 0.18rem;
  &__title {
    margin-bottom: 0.12rem;
    font-size: 14px;
    color: #333333;
  }
  a {
    display: block;
    text-decoration: none;
  }
  &__item {
    display: flex;
    padding: 0.18rem;
    background: #ffffff;
    border-radius: 4px;
  }
  &__info {
    display: flex;
    font-size: 14px;
    color: #999999;
    line-height: 0.2rem;
    &__name {
      margin-right: 0.66rem;
    }
  }
  &__content {
    font-size: 14px;
    color: #333333;
    line-height: 0.2rem;
    padding: 0.08rem 0.4rem 0 0;
  }
  &__expand {
    margin: auto;
    transform: rotate(180deg);
    color: #999999;
    font-size: 0.18rem;
  }
}
</style>
