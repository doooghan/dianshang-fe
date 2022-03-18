<template>
  <div class="wrapper">
    <AddressInfo title="编辑收货地址" rightContent="保存" />
  </div>
</template>

<script>
import AddressInfo from '../../components/AddressInfo.vue'

export default {
  name: 'AddressUpdate',

  components: { AddressInfo },
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
