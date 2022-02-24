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
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt=""
    />
  </div>
  <div class="icons">
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">超市便利</p>
    </div>
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">菜市场</p>
    </div>
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/水果店.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">水果店</p>
    </div>
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">鲜花绿植</p>
    </div>
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">医药健康</p>
    </div>
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/家居.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">家居时尚</p>
    </div>
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">烘焙蛋糕</p>
    </div>
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/签到.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">签到</p>
    </div>
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">大牌免运</p>
    </div>
    <div class="icons__items">
      <img
        src="http://www.dell-lee.com/imgs/vue3/红包.png"
        alt=""
        class="icons__items__img"
      />
      <p class="icons__items__desc">红包套餐</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: "StaticPart",
};
</script>

<style lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
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
  background: #f5f5f5;
  border-radius: 0.16rem;
  color: #b7b7b7;
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
