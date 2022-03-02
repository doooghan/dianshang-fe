<template>
  <div class="content">
    <div class="category">
      <div :class="{'category__item':true , 'category__item--active': item.tab === currentCategory}"
           v-for="item in categories"
           :key="item.name"
           @click="() => handleCategoriesClick(item.tab)">{{item.name}}</div>
    </div>
    <div class="product">
      <div class="product__item"
           v-for="item in contentList"
           :key="item._id">
        <img :src="item.imgUrl"
             alt=""
             class="
             product__item__img">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__sales">月售 {{item.sales}} 件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{item.price}}
            <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <div class="product__number__minus">-</div>
          0
          <div class="product__number__plus">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
export default {
  name: 'Content',
  setup() {
    const categories = [
      {
        name: '全部商品',
        tab: 'all',
      },
      {
        name: '秒杀',
        tab: 'seckill',
      },
      {
        name: '新鲜水果',
        tab: 'fruit',
      },
    ]
    const data = reactive({
      currentCategory: categories[0].tab,
      contentList: [],
    })
    const getContentData = async (tab) => {
      const result = await get('/api/shop/1/products', { tab })
      if (result?.errno === 0 && result?.data) {
        data.contentList = result.data
      }
    }
    const handleCategoriesClick = (tab) => {
      getContentData(tab)
      data.currentCategory = tab
    }
    getContentData('all')
    const { currentCategory, contentList } = toRefs(data)
    return { contentList, currentCategory, categories, handleCategoriesClick }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.content {
  position: absolute;
  display: flex;
  top: 1.5rem;
  left: 0;
  right: 0;
  bottom: 0.5rem;
}
.category {
  overflow-y: scroll;
  width: 0.76rem;
  height: 100%;
  background: $search-bgColor;
  border-radius: 0.02rem;
  &__item {
    font-size: 0.14rem;
    color: $content-fontcolor;
    line-height: 0.4rem;
    text-align: center;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
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
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: $content-fontcolor;
      line-height: 0.16rem;
    }
    &__price {
      margin: 0;
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
</style>
