<template>
  <div class="docker">
    <div v-for="(item, index) in dockerList"
         :class="{ docker__item: true, 'docker__item--active': index === 0 }"
         :key="index">
      <div class="iconfont"
           v-html="item.icon" />
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup() {
    const dockerList = [
      { icon: '&#xe8b9;', text: '首页' },
      { icon: '&#xe742;', text: '购物车' },
      { icon: '&#xe8ae;', text: '订单' },
      { icon: '&#xe6ef;', text: '我的' },
    ]
    return { dockerList }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  color: $content-fontcolor;
  border-top: 0.01rem solid $content-bgColor;
  padding: 0 0.18rem;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
