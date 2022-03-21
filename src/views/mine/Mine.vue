<template>
  <div class="wrapper"></div>
  <div class="user">
    <img
      src="https://serverless-project-static-files.oss-cn-beijing.aliyuncs.com/apiServerImages/avatar.jpg"
      alt=""
      class="user__img"
    />
    <div class="user__name">热心市民李先生</div>
    <div class="user__id">ID: {{ info._id }}</div>
    <div class="user__discount">
      <div
        class="user__discount__item"
        v-for="item in discountList"
        :key="item.title"
      >
        <div class="user__discount__item__title">{{ item.title }}</div>
        <div class="user__discount__item__count">{{ item.count }}</div>
      </div>
    </div>
  </div>
  <div class="setting">
    <router-link :to="{ name: 'Address' }">
      <div class="setting__item">
        <div class="setting__item__left">
          <div class="setting__item__icon iconfont">&#xe619;</div>
          我的地址
        </div>
        <div class="setting__item__expand iconfont">&#xe601;</div>
      </div>
    </router-link>
  </div>
  <Docker :currentIndex="3" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import Docker from '../../components/Docker.vue'

const useInfoEffect = () => {
  const data = reactive({
    info: {},
  })
  const getInfo = async () => {
    const result = await get(`/api/user/info`)
    if (result.errno === 0 && result.data) {
      data.info = result.data
    }
  }
  const { info } = toRefs(data)
  return { info, getInfo }
}

export default {
  name: 'Mine',
  components: { Docker },
  setup() {
    const { info, getInfo } = useInfoEffect()
    getInfo()
    const discountList = [
      { title: '红包', count: 218 },
      { title: '优惠卷', count: 12 },
      { title: '鲜豆', count: 88 },
      { title: '白条', count: 1000 },
    ]

    return { info, discountList }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
  height: 2.5rem;
}
.user {
  margin: -1.5rem 0.16rem 0 0.16rem;
  background: $bgColor;
  box-shadow: 0 0.08rem 0.16rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.08rem;
  text-align: center;
  &__img {
    width: 0.94rem;
    height: 0.94rem;
    border-radius: 50%;
    margin-top: -0.47rem;
  }
  &__name {
    font-size: 0.24rem;
    color: $mine-dark;
    line-height: 0.36rem;
  }
  &__id {
    font-size: 0.14rem;
    color: $mine-light;
    margin-bottom: 0.12rem;
  }
  &__discount {
    display: flex;
    border-top: 0.01rem solid $content-bgColor;
    padding: 0.12rem 0 0.16rem 0;
    &__item {
      flex: 25%;
      &__title {
        font-size: 0.12rem;
        color: $mine-light;
        text-align: center;
        margin-bottom: 0.03rem;
      }
      &__count {
        font-size: 0.2rem;
        color: $mine-dark;
        text-align: center;
      }
    }
  }
}
.setting {
  background: $bgColor;
  box-shadow: 0 0.08rem 0.16rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.08rem;
  margin: 0.16rem;
  padding: 0.04rem 0;
  a {
    text-decoration: none;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    font-size: 0.14rem;
    color: $mine-dark;
    padding: 0.12rem;
    line-height: 0.2rem;
    &__left {
      display: flex;
    }
    &__icon {
      width: 0.22rem;
      height: 0.22rem;
      border-radius: 0.08rem;
      background: $location-blue;
      color: $bgColor;
      text-align: center;
      margin-right: 0.12rem;
    }
    &__expand {
      transform: rotate(180deg);
      color: $back-bgColor;
    }
  }
}
</style>
