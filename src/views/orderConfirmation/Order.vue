<template>
  <div class="order">
    <div class="order__price">实付金额 <b>¥{{calculations.price}}</b></div>
    <div class="order__btn">提交订单</div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

export default {
  name: 'Order',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { calculations } = useCommonCartEffect(shopId)

    return { calculations }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 0.49rem;
  line-height: 0.49rem;
  background: $bgColor;
  &__price {
    flex: 1;
    text-indent: 0.24rem;
    font-size: 0.14rem;
    color: $content-fontcolor;
  }
  &__btn {
    width: 0.98rem;
    background: #4fb0f9;
    color: $bgColor;
    text-align: center;
    font-size: 0.14rem;
  }
}
</style>
