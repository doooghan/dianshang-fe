<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="top__header__back iconfont">&#xe601;</div>确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">瑶妹（先生）</span>
          <span class="top__receiver__info__tel">18911024266</span>
        </div>
        <div class="top__receiver__icon iconfont">&#xe601;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirmation',
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #eee;
}
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: 0.26rem;
    line-height: 0.24rem;
    color: #fff;
    text-align: center;
    font-size: 0.16rem;
    &__back {
      position: absolute;
      font-size: 0.22rem;
      padding-left: 0.18rem;
    }
  }
  &__receiver {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 1.11rem;
    background-color: #fff;
    border-radius: 4px;
    &__title {
      padding: 0.16rem 0 0.14rem 0.16rem;
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: #333333;
    }
    &__address {
      padding: 0 0.04rem 0 0.16rem;
      line-height: 0.2rem;
      font-size: 14px;
      color: #333333;
    }
    &__info {
      padding: 0.06rem 0 0 0.16rem;
      font-size: 12px;
      color: #666666;
      line-height: 0.18rem;
      &__name {
        margin-right: 0.06rem;
      }
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      color: #666;
      font-size: 0.2rem;
    }
  }
}
</style>
