<template>
  <div class="wrapper">
    <div class="title">我的全部购物车</div>
    <div
      class="cart"
      v-for="(cartList, index) in notEmptyAllCartList"
      :key="index"
    >
      <div class="cart__title">
        {{ cartList.shopName }}
      </div>
      <div class="cart__content">
        <div
          class="cart__item"
          v-for="item in cartList.productList"
          :key="item._id"
        >
          <img :src="item.imgUrl" alt="" class="cart__item__img" />
          <div class="cart__item__content">
            <div class="cart__item__title">{{ item.name }}</div>
            <div class="cart__item__info">
              <span class="cart__item__sales">
                <span class="cart__item__yen">&yen; </span>
                {{ item.price }} x {{ item.count }}
              </span>
              <span class="cart__item__price">
                <span class="cart__item__yen">&yen; </span>
                {{ item.price * item.count }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="1" />
</template>

<script>
import { useStateCartListEffect } from '../../effects/cartEffects'
import Docker from '../../components/Docker.vue'

export default {
  name: 'CartList',
  components: { Docker },
  setup() {
    const { notEmptyAllCartList } = useStateCartListEffect()
    return { notEmptyAllCartList }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  bottom: 0.49rem;
  left: 0;
  right: 0;
  background-color: $bgColor-gray;
}
.title {
  width: 100%;
  font-size: 0.16rem;
  color: $content-fontcolor;
  line-height: 0.44rem;
  background: $bgColor;
  text-align: center;
}
.cart {
  background: $bgColor;
  border-radius: 0.04rem;
  margin: 0.16rem 0.18rem;
  &__title {
    font-size: 0.16rem;
    color: $content-fontcolor;
    line-height: 0.22rem;
    padding: 0.16rem 0 0 0.16rem;
  }
  &__item {
    display: flex;
    padding: 0.16rem;
    font-size: 0.14rem;
    color: $content-fontcolor;
    line-height: 0.2rem;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
    }
    &__content {
      flex: 1;
      padding-left: 0.16rem;
    }
    &__title {
      margin-bottom: 0.06rem;
    }
    &__sales {
      font-size: 0.14rem;
      color: $hightlight-fontcolor;
      line-height: 0.2rem;
    }
    &__price {
      float: right;
    }
  }
}
</style>
