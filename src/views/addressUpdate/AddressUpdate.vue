<template>
  <div class="wrapper">
    <Header title="编辑收货地址" rightContent="保存" />
    <!--  @handleClick="createAddressClick" -->
    <AddressInfo />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'

import AddressInfo from '../../components/AddressInfo.vue'

export default {
  name: 'AddressUpdate',
  components: { AddressInfo, Header },
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
</style>
