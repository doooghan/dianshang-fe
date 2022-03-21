<template>
  <div class="wrapper">
    <Header
      title="管理收货地址"
      rightContent="创建"
      @handleClick="createAddressClick"
    />
    <div class="address">
      <div class="address__title">我的收货地址</div>
      <router-link
        :to="{ path: `/addressUpdate/${item._id}` }"
        v-for="item in list"
        :key="item._id"
      >
        <div class="address__item">
          <div class="address__left">
            <div class="address__info">
              <div class="address__info__name">{{ item.name }}</div>
              <div class="address__info__tel">{{ item.phone }}</div>
            </div>
            <div class="address__content">
              {{ item.department }} {{ item.houseNumber }}
            </div>
          </div>
          <div class="address__expand iconfont">&#xe601;</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../../components/Header.vue'
import { get } from '../../utils/request'

// 获取地址列表
const useAddressEffect = () => {
  const data = reactive({ list: [] })

  const getAddressList = async () => {
    const result = await get(`/api/user/address`)
    if (result?.errno === 0 && result?.data) {
      data.list = result.data
    }
  }

  const { list } = toRefs(data)
  return { list, getAddressList }
}

// 右上角按钮方法
const useCreateEffect = () => {
  const router = useRouter()

  const createAddressClick = () => {
    router.push({ name: 'AddressCreate' })
  }

  return { createAddressClick }
}

export default {
  name: 'Address',
  components: { Header },
  setup() {
    const { list, getAddressList } = useAddressEffect()
    getAddressList()
    const { createAddressClick } = useCreateEffect()

    return { createAddressClick, list }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $bgColor-gray;
}
.address {
  padding: 0.16rem 0.18rem;
  &__title {
    margin-bottom: 0.12rem;
    font-size: 0.14rem;
    color: $content-fontcolor;
  }
  a {
    display: block;
    text-decoration: none;
  }
  &__item {
    display: flex;
    padding: 0.18rem;
    background: $bgColor;
    border-radius: 0.04rem;
    margin-bottom: 0.16rem;
  }
  &__left {
    flex: 1;
  }
  &__info {
    display: flex;
    font-size: 0.14rem;
    color: $light-fontcolor;
    line-height: 0.2rem;
    &__name,
    &__tel {
      flex: 1;
    }
  }
  &__content {
    font-size: 0.14rem;
    color: $content-fontcolor;
    line-height: 0.2rem;
    padding: 0.08rem 0.2rem 0 0;
  }
  &__expand {
    margin: auto;
    transform: rotate(180deg);
    color: $light-fontcolor;
    font-size: 0.18rem;
  }
}
</style>
