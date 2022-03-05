<template>
  <div class="wrapper">orderList</div>

  <Docker :currentIndex="2" />
</template>

<script>
import Docker from '../../components/Docker.vue'

export default {
  name: 'OrderList',
  components: { Docker },
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.5rem;
  right: 0;
  background-color: #eee;
}
</style>
