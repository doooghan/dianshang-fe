<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div v-for="item in nearbyList" class="nearby__item" :key="item.id">
      <img :src="item.imgUrl" alt="" class="nearby__item__img" />
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.title }}</div>
        <div class="nearby__content__tags">
          <span
            class="nearby__content__tag"
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
            >{{ innerItem }}</span
          >
        </div>
        <p class="nearby__content__highlight">
          {{ item.highlight }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nearby",
  setup() {
    const nearbyList = [
      {
        id: 1,
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"],
        highlight: "VIP尊享满89元减4元运费券（每月3张）"
      },
      {
        id: 2,
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"],
        highlight: "VIP尊享满89元减4元运费券（每月3张）"
      }
    ];
    return { nearbyList };
  }
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
