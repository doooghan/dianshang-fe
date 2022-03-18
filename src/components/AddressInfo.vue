<template>
  <Header :title="title" :rightContent="rightContent" />
  <div class="info">
    <div class="info__input">
      <span class="info__input__title">所在城市：</span>
      <input
        type="text"
        class="info__input__content"
        placeholder="如北京市"
        v-model="data.city"
      />
    </div>
    <div class="info__input">
      <span class="info__input__title">小区/大厦/学校：</span>
      <input
        type="text"
        class="info__input__content"
        placeholder="如理工大学国防科技园"
        v-model="data.department"
      />
    </div>
    <div class="info__input">
      <span class="info__input__title">楼号-门牌号：</span>
      <input
        type="text"
        class="info__input__content"
        placeholder="A号楼B层"
        v-model="data.houseNumber"
      />
    </div>
    <div class="info__input">
      <span class="info__input__title">收货人：</span>
      <input
        type="text"
        class="info__input__content"
        placeholder="请填写收货人的姓名"
        v-model="data.name"
      />
    </div>
    <div class="info__input">
      <span class="info__input__title">联系电话：</span>
      <input
        type="text"
        class="info__input__content"
        placeholder="请填写收货手机号"
        v-model="data.phone"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import Header from './Header.vue'

export default {
  name: 'AddressInfo',
  props: ['title', 'rightContent'],
  components: { Header },
  setup() {
    const data = reactive({
      city: 'city',
      department: 'xx小区',
      houseNumber: '门牌号',
      name: '张三',
      phone: '110',
    })
    return { data }
  },
}
</script>

<style lang="scss" scoped>
.info {
  margin: 0.12rem;
  &__input {
    line-height: 0.45rem;
    font-size: 14px;
    color: #666666;
    background-color: #fff;
    padding: 0 0.18rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &__content {
      width: 60%;
      outline: none;
      border: none;
      ::placeholder {
        color: #999999;
      }
    }
  }
}
</style>
