<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">起送¥0</span>
          <span class="nearby__content__tag">基础运费¥5</span>
        </div>
        <p class="nearby__content__highlight">
          VIP尊享满89元减4元运费券（每月3张）
        </p>
      </div>
    </div>
  </div>
  <div class="nearby__item">
    <img
      src="http://www.dell-lee.com/imgs/vue3/near.png"
      alt=""
      class="nearby__item__img"
    />
    <div class="nearby__content">
      <div class="nearby__content__title">沃尔玛</div>
      <div class="nearby__content__tags">
        <span class="nearby__content__tag">月售1万+</span>
        <span class="nearby__content__tag">起送¥0</span>
        <span class="nearby__content__tag">基础运费¥5</span>
      </div>
      <p class="nearby__content__highlight">
        VIP尊享满89元减4元运费券（每月3张）
      </p>
    </div>
  </div>
  <div class="nearby__item">
    <img
      src="http://www.dell-lee.com/imgs/vue3/near.png"
      alt=""
      class="nearby__item__img"
    />
    <div class="nearby__content">
      <div class="nearby__content__title">沃尔玛</div>
      <div class="nearby__content__tags">
        <span class="nearby__content__tag">月售1万+</span>
        <span class="nearby__content__tag">起送¥0</span>
        <span class="nearby__content__tag">基础运费¥5</span>
      </div>
      <p class="nearby__content__highlight">
        VIP尊享满89元减4元运费券（每月3张）
      </p>
    </div>
  </div>
  <div class="nearby__item">
    <img
      src="http://www.dell-lee.com/imgs/vue3/near.png"
      alt=""
      class="nearby__item__img"
    />
    <div class="nearby__content">
      <div class="nearby__content__title">沃尔玛</div>
      <div class="nearby__content__tags">
        <span class="nearby__content__tag">月售1万+</span>
        <span class="nearby__content__tag">起送¥0</span>
        <span class="nearby__content__tag">基础运费¥5</span>
      </div>
      <p class="nearby__content__highlight">
        VIP尊享满89元减4元运费券（每月3张）
      </p>
    </div>
  </div>
  <div class="nearby__item">
    <img
      src="http://www.dell-lee.com/imgs/vue3/near.png"
      alt=""
      class="nearby__item__img"
    />
    <div class="nearby__content">
      <div class="nearby__content__title">沃尔玛</div>
      <div class="nearby__content__tags">
        <span class="nearby__content__tag">月售1万+</span>
        <span class="nearby__content__tag">起送¥0</span>
        <span class="nearby__content__tag">基础运费¥5</span>
      </div>
      <p class="nearby__content__highlight">
        VIP尊享满89元减4元运费券（每月3张）
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nearby",
};
</script>

<style lang="scss">
@import "../../style/viriables.scss";
.nearby {
  &__title {
    font-size: 0.18rem;
    line-height: 0.25rem;
    font-weight: normal;
    color: $content-fontcolor;
    margin: 0.16rem 0 0.02rem 0;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
  }
  &__content {
    border-bottom: 1px solid $content-bgColor;
    padding-bottom: 0.12rem;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
      margin: 0.08rem 0;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      color: #e93b3b;
      line-height: 0.18rem;
      font-size: 0.13rem;
      margin: 0;
    }
  }
}
</style>
