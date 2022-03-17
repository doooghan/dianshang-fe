<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div class="order" v-for="(item, index) in list" :key="index">
        <div class="order__title">
          {{ item.shopName }}
          <span class="order__status">
            {{ item.isCanceled ? '已取消' : '已下单' }}
          </span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <template
              v-for="(innerItem, innerIndex) in item.products"
              :key="innerIndex"
            >
              <img
                :src="innerItem.product.img"
                alt=""
                class="order__content__img"
              />
            </template>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">¥ {{ item.totalPrice }}</div>
            <div class="order__content__count">
              共 {{ item.totalNumber }} 件
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Docker :currentIndex="2" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import Docker from '../../components/Docker.vue'
import { get } from '../../utils/request'

// 处理订单列表
const useOrderListEffect = () => {
  const data = reactive({ list: [] })

  const getOrderList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach((order) => {
        let totalPrice = 0
        let totalNumber = 0
        const products = order.products || []
        products.forEach((productItem) => {
          totalNumber += productItem?.orderSales || 0
          totalPrice +=
            productItem?.product?.price * productItem?.orderSales || 0
        })
        order.totalPrice = totalPrice
        order.totalNumber = totalNumber
      })
      data.list = result.data
    }
  }
  getOrderList()

  const { list } = toRefs(data)
  return { list }
}

export default {
  name: 'OrderList',

  components: { Docker },
  setup() {
    const { list } = useOrderListEffect()
    return { list }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.5rem;
  right: 0;
  background-color: $bgColor-gray;
}
.title {
  line-height: 0.44rem;
  background-color: $bgColor;
  font-size: 0.16rem;
  color: $content-fontcolor;
  text-align: center;
}
.orders {
}
.order {
  margin: 0.16rem 0.18rem;
  padding: 0.16rem;
  background: $bgColor;
  border-radius: 0.04rem;
  &__title {
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: $content-fontcolor;
    margin-bottom: 0.16rem;
  }
  &__status {
    float: right;
    font-size: 0.14rem;
    color: $light-fontcolor;
  }
  &__content {
    display: flex;
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.12rem;
    }
    &__info {
      flex: 1;
      text-align: right;
    }
    &__price {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontcolor;
      margin-bottom: 0.04rem;
    }
    &__count {
      font-size: 0.12rem;
      color: $content-fontcolor;
      line-height: 0.14rem;
    }
  }
}
</style>
