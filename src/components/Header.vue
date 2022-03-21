<template>
  <div class="header">
    <div class="header__back iconfont" @click="handleBackClick">&#xe601;</div>
    <div class="header__title">{{ title }}</div>
    <div class="header__right" @click="handleBtnClick">{{ rightContent }}</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

// 左上角的返回
const uesBackEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

// 右上角的功能
const useBtnEffect = (context) => {
  const handleBtnClick = () => {
    context.emit('handleClick')
  }
  return { handleBtnClick }
}

export default {
  name: 'Header',
  props: ['title', 'rightContent'],
  setup(props, context) {
    const { handleBackClick } = uesBackEffect()
    const { handleBtnClick } = useBtnEffect(context)

    return { handleBackClick, handleBtnClick }
  },
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.header {
  display: flex;
  padding: 0 0.18rem;
  justify-content: space-between;
  background-color: $bgColor;
  line-height: 0.44rem;
  &__back {
    font-size: 0.2rem;
    color: $back-bgColor;
  }
  &__title {
    font-size: 0.16rem;
    color: $content-fontcolor;
  }
  &__right {
    font-size: 0.14rem;
    color: $content-fontcolor;
  }
}
</style>
