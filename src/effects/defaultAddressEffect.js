import { reactive, toRefs } from "vue";
import { get } from "../utils/request";

// 获取一个地址信息
export const useAddressEffect = () => {
  const data = reactive({
    info: {},
  });
  const getInfo = async () => {
    const result = await get(`/api/user/address`);
    if (result.errno === 0 && result.data) {
      data.info = result.data?.[0];
    }
  };
  const { info } = toRefs(data);
  return { info, getInfo };
};
