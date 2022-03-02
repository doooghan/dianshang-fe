<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe619;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xeb68;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe600;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner__img"
         src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
         alt="" />
  </div>
  <div class="icons">
    <div class="icons__items"
         v-for="(item, index) in iconList"
         :key="index">
      <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
           alt=""
           class="icons__items__img" />
      <p class="icons__items__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup() {
    const iconList = [
      { imgName: '超市', desc: '超市' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' },
    ]
    return { iconList }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.position {
  position: relative;
  padding: 0.16rem 0.2rem 0.16rem 0;
  font-size: 0.16rem;
  line-height: 0.22rem;
  @include ellipses;
  color: $content-fontcolor;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
}
.search {
  height: 0.32rem;
  line-height: 0.32rem;
  background: $search-bgColor;
  border-radius: 0.16rem;
  color: $search-fontcolor;
  margin-bottom: 0.16rem;
  .iconfont {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.2rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.16rem;
  }
}
.banner {
  // 这三行是为了防止网络太慢，导致图片没加载出来引起的页面抖动
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__items {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      color: $content-fontcolor;
    }
  }
}
.gap {
  height: 0.16rem;
  background-color: $content-bgColor;
  margin: 0 -0.16rem;
}
</style>
