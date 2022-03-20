<template>
  <div class="wrapper">
    <Header
      title="新建收货地址"
      rightContent="新建"
      @handleClick="handleConfirmAddress"
    />
    <AddressInfo ref="sonRef" :infoData="data" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Header from '../../components/Header.vue'
import AddressInfo from '../../components/AddressInfo.vue'

// 传递给子组件的数据
const useInfoDataEffect = () => {
  return {
    city: '',
    department: '',
    houseNumber: '',
    name: '',
    phone: '',
  }
}

// 右上角按钮方法
const useSaveEffect = (sonRef) => {
  const router = useRouter()

  const handleConfirmAddress = async () => {
    console.log('create')
    const createData = sonRef.value.createData
    try {
      const result = await post('api/user/address', createData)
      if (result?.errno === 0) {
        console.log('创建地址成功')
        console.log(result.data)
        router.push({ name: 'Address' })
      }
    } catch (e) {
      console.error(e)
      console.log('创建地址失败')
    }
  }

  return { handleConfirmAddress }
}

export default {
  name: 'AddressCreate',
  components: { AddressInfo, Header },
  setup() {
    const sonRef = ref(null)
    const { handleConfirmAddress } = useSaveEffect(sonRef)
    const data = useInfoDataEffect()

    return { handleConfirmAddress, data, sonRef }
  },
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
