<template>
  <div class="header">
    <div class="header__back iconfont" @click="handleBackClick">&#xe601;</div>
    <div class="header__title">{{ title }}</div>
    <div class="header__right">{{ rightContent }}</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Header',
  props: ['title', 'rightContent'],
  setup() {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return { handleBackClick }
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 0 0.18rem;
  justify-content: space-between;
  background-color: #fff;
  line-height: 0.44rem;
  &__back {
    font-size: 0.2rem;
    color: #b6b6b6;
  }
  &__title {
    font-size: 16px;
    color: #333333;
  }
  &__right {
    font-size: 14px;
    color: #333333;
  }
}
</style>
