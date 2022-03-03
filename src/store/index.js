import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: {},
  },
  getters: {},
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload;
      // console.log(shopId, productId, productInfo);
      let shopInfo = state.cartList[shopId];
      if (!shopInfo) {
        shopInfo = {};
      }
      let product = shopInfo[productId];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      product.count += payload.num;
      if (product.count < 0) {
        product.count = 0;
      }

      shopInfo[productId] = product;
      state.cartList[shopId] = shopInfo;
      console.log(state);
    },
  },
  actions: {},
  modules: {},
});
