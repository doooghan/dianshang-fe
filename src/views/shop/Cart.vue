<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png"
             alt=""
             class="check__icon__img">
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">总计：<span class="check__info__price">&yen;128</span></div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      width: 0.28rem;
      height: 0.26rem;
      margin: 0.12rem auto;
    }
    &__tag {
      position: absolute;
      top: 0.04rem;
      right: 0.2rem;
      width: 0.2rem;
      height: 0.2rem;
      background: $hightlight-fontcolor;
      color: $bgColor;
      transform: scale(0.5);
      border-radius: 50%;
      font-size: 0.12rem;
      text-align: center;
    }
  }
  &__info {
    flex: 1;
    font-size: 0.12rem;
    color: $content-fontcolor;
    line-height: 0.49rem;
    &__price {
      font-size: 0.18rem;
      color: $hightlight-fontcolor;
    }
  }
  &__btn {
    width: 0.98rem;
    background: #4fb0f9;
    line-height: 0.49rem;
    font-size: 0.14rem;
    color: $bgColor;
    text-align: center;
  }
}
</style>
