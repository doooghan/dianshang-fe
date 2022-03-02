<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont"
           @click="handleBackClick">&#xe601;</div>
      <div class="search__content">
        <div class="search__content__icon iconfont">&#xe600;</div>
        <input type="text"
               class="search__content__input"
               placeholder="请输入商品名称搜索">
      </div>
    </div>
    <ShopInfo :item="item"
              :hideBorder="true" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo.vue'
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup() {
    const router = useRouter()
    const item = {
      expressLimit: 0,
      expressPrice: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      name: '沃尔玛',
      sales: 10000,
      slogan: 'VIP尊享满89元减4元运费券',
      _id: '1',
    }
    const handleBackClick = () => {
      router.back()
    }
    return { item, handleBackClick }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: 0.14rem 0 0.04rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontcolor;
    }
    &__input {
      display: block;
      width: 100%;
      height: 0.32rem;
      padding-right: 0.16rem;
      background: none;
      border: none;
      outline: none;
      font-size: 0.14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
