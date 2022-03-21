import { computed } from "vue";
import { useStore } from "vuex";

// TODO 重新整理全局的 computed， 例如 notEmptyProductList 已经被打印了

// 一个非空的全部购物车列表
export const useStateCartListEffect = () => {
  const store = useStore();
  const allCartList = store.state.cartList;
  const notEmptyAllCartList = computed(() => {
    const notEmptyAllCartList = {};
    for (const i in allCartList) {
      const cartList = allCartList[i];
      const productList = cartList.productList;
      if (Object.keys(productList).length > 0) {
        notEmptyAllCartList[i] = {
          shopName: cartList.shopName,
          productList: {},
        };
        for (const j in productList) {
          const product = productList[j];
          if (product.count > 0) {
            notEmptyAllCartList[i].productList[j] = product;
          }
        }
      }
    }
    return notEmptyAllCartList;
  });
  return { notEmptyAllCartList };
};

// 购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore();
  const cartList = store.state.cartList;
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit("changeCartItemInfo", { shopId, productId, productInfo, num });
  };

  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {};
    const notEmptyProductList = {};
    for (const i in productList) {
      const product = productList[i];
      if (product.count > 0) {
        notEmptyProductList[i] = product;
      }
    }
    return notEmptyProductList;
  });

  // shopname 这么写是因为把 shopname 变成了响应式， 否则普通的空字符串不具备响应式
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || "";
    return shopName;
  });

  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList;
    const result = { total: 0, price: 0, allChecked: true };
    if (productList) {
      for (const i in productList) {
        const product = productList[i];
        if (product.check) {
          result.total += product.count;
          result.price += product.count * product.price;
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false;
        }
      }
    }
    result.price = result.price.toFixed(2);
    return result;
  });

  return { changeCartItemInfo, cartList, productList, shopName, calculations };
};
