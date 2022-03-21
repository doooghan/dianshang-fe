<template>
  <div class="wrapper">
    <Header
      title="编辑收货地址"
      rightContent="保存"
      @handleClick="handleUpdateAddress"
    />
    <AddressInfo ref="sonRef" :infoData="data" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get, patch } from '../../utils/request'
import Header from '../../components/Header.vue'
import AddressInfo from '../../components/AddressInfo.vue'

// 传递给子组件的数据
const useInfoDataEffect = () => {
  const route = useRoute()
  const addressId = route.params.id
  const infoData = reactive({
    data: {
      city: '',
      department: '',
      houseNumber: '',
      name: '',
      phone: '',
    },
  })

  const getInfoData = async () => {
    const result = await get(`/api/user/address/${addressId}`)
    if (result?.errno === 0 && result?.data) {
      infoData.data = result?.data
    }
  }

  const { data } = toRefs(infoData)
  return { data, getInfoData }
}

// 更新地址的请求
const useUpdateEffect = (sonRef) => {
  const router = useRouter()
  const route = useRoute()
  const addressId = route.params.id
  const handleUpdateAddress = async () => {
    const createData = sonRef.value.createData

    const result = await patch(`/api/user/address/${addressId}`, createData)
    if (result?.errno === 0) {
      router.push({ name: 'Address' })
    } else {
      console.log(result)
    }
  }
  return { handleUpdateAddress }
}

export default {
  name: 'AddressUpdate',
  components: { AddressInfo, Header },
  setup() {
    const { data, getInfoData } = useInfoDataEffect()
    getInfoData()
    const sonRef = ref(null)
    const { handleUpdateAddress } = useUpdateEffect(sonRef)

    return { handleUpdateAddress, sonRef, data }
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
