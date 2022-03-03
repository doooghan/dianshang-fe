<template>
  <div class="cart">
    <div class="product">
      <template v-for="item in productList"
                :key="item._id">
        <div class="product__item"
             v-if="item.count>0">
          <img :src="item.imgUrl"
               alt=""
               class="
             product__item__img">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
              <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
            </p>
          </div>
          <div class="product__number">
            <div class="product__number__minus"
                 @click="()=>{changeCartItemInfo(shopId, item._id, item, -1)}">-</div>
            {{item?.count || 0}}
            <div class="product__number__plus"
                 @click="()=>{changeCartItemInfo(shopId, item._id, item, 1)}">+</div>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png"
             alt=""
             class="check__icon__img">
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">总计：<span class="check__info__price">&yen; {{price}}</span></div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

// 购物车逻辑
const useCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList

  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (cartList) {
      for (const i in productList) {
        count += productList[i].count
      }
    }
    return count
  })

  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (cartList) {
      for (const i in productList) {
        count += productList[i].count * productList[i].price
      }
    }
    return count.toFixed(2)
  })

  const productList = computed(() => {
    const productList = cartList[shopId] || []
    console.log(store.state)
    return productList
  })

  return { total, price, productList }
}

export default {
  name: 'Cart',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { total, price, productList } = useCartEffect(shopId)
    const { changeCartItemInfo } = useCommonCartEffect()

    return { total, price, productList, changeCartItemInfo, shopId }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background-color: #fff;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipses;
    }
    &__price {
      margin: 0.06rem 0 0 0;
      font-size: 0.14rem;
      color: $hightlight-fontcolor;
      line-height: 0.2rem;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-right: 0.06rem;
      font-size: 0.1rem;
      color: $light-fontcolor;
      line-height: 0.2rem;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        font-size: 0.2rem;
        line-height: 0.17rem;
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid $medium-fontcolor;
        color: $medium-fontcolor;
        margin-right: 0.05rem;
      }
      &__plus {
        color: $bgColor;
        background-color: $btn-bgColor;
        margin-left: 0.05rem;
      }
    }
  }
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
      left: 0.46rem;
      padding: 0 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background: $hightlight-fontcolor;
      color: $bgColor;
      transform: scale(0.5);
      transform-origin: left center;
      border-radius: 0.1rem;
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
