<template>
  <div class="order">
    <div class="order__price">实付金额 <b>¥{{calculations.price}}</b></div>
    <div class="order__btn"
         @click="()=>handleShowConfirmChange(true)">提交订单</div>
  </div>
  <div class="mask"
       v-show="showConfirm"
       @click="()=>handleShowConfirmChange(false)">
    <div class="mask__content"
         @click.stop>
      <!--防止事件冒泡 -->
      <h4 class="mask__content__title">确认要离开收银台？</h4>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div class="mask__content__btn mask__content__btn__first"
             @click="()=>handleConfirmOrder(true)">取消订单</div>
        <div class="mask__content__btn mask__content__btn__last"
             @click="()=>handleConfirmOrder(false)">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { post } from '../../utils/request'
import { useCommonCartEffect } from '../../effects/cartEffects'

const useMakeOrderEffect = (shopId, shopName, productList) => {
  const router = useRouter()
  const store = useStore()

  const handleConfirmOrder = async (isCanceled) => {
    const products = []
    for (const i in productList.value) {
      const product = productList.value[i]
      products.push({ id: parseInt(product._id, 10), num: product.count })
    }
    try {
      const result = await post('api/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled,
        products,
      })
      if (result?.errno === 0) {
        if (!isCanceled) {
          store.commit('clearCartData', shopId)
        }
        router.push({ name: 'Home' })
      }
    } catch (e) {
      // TODO 提示下单失败
      console.log(e)
    }
  }

  return { handleConfirmOrder }
}

const useshowMakeEffect = () => {
  const showConfirm = ref(false)
  const handleShowConfirmChange = (status) => {
    showConfirm.value = status
  }
  return { showConfirm, handleShowConfirmChange }
}

export default {
  name: 'Order',
  setup() {
    const route = useRoute()
    const shopId = parseInt(route.params.id, 10)
    const { productList, calculations, shopName } = useCommonCartEffect(shopId)
    const { handleConfirmOrder } = useMakeOrderEffect(
      shopId,
      shopName,
      productList
    )
    const { showConfirm, handleShowConfirmChange } = useshowMakeEffect()

    return {
      calculations,
      handleConfirmOrder,
      showConfirm,
      handleShowConfirmChange,
    }
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

.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  &__content {
    width: 3rem;
    height: 1.57rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border-radius: 0.04rem;
    text-align: center;
    &__title {
      // font-weight: normal;
      margin: 0.24rem 0 0 0;
      font-size: 0.18rem;
      line-height: 0.26rem;
      color: #333333;
    }
    &__desc {
      margin: 0.08rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #666666;
    }
    &__btns {
      display: flex;
      margin: 0.24rem 0.59rem;
    }
    &__btn {
      flex: 1;
      width: 0.84rem;
      line-height: 0.32rem;
      font-size: 0.14rem;
      border: 0.01rem solid #4fb0f9;
      border-radius: 0.16rem;
      &__first {
        margin-right: 0.12rem;
        color: #0091ff;
      }
      &__last {
        margin-left: 0.12rem;
        color: #ffffff;
        background: #4fb0f9;
      }
    }
  }
}
</style>
