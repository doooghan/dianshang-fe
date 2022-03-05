import { createStore } from "vuex";

const setLocalCartList = (state) => {
  const { cartList } = state;
  const cartListString = JSON.stringify(cartList);
  localStorage.cartList = cartListString;
};

const getLocalCartList = () => {
  // cartList: {
  //   shopId: {
  //     shopName: "沃尔玛",
  //     productList: {
  //       productId: {
  //         _id: "1",
  //         name: "番茄",
  //       },
  //     },
  //   }
  return JSON.parse(localStorage.cartList);
};

export default createStore({
  state: {
    cartList: getLocalCartList(),
  },
  getters: {},
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload;
      const shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {},
      };

      let product = shopInfo.productList[productId];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      product.count += payload.num;
      if (payload.num > 0) {
        product.check = true;
      }
      if (product.count < 0) {
        product.count = 0;
      }

      shopInfo.productList[productId] = product;
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {},
      };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId].productList[productId];
      product.check = !product.check;
      setLocalCartList(state);
    },

    cleanCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
      setLocalCartList(state);
    },

    setCartItemsChecked(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId].productList;
      if (products) {
        for (const key in products) {
          const product = products[key];
          product.check = true;
        }
      }
      setLocalCartList(state);
    },

    clearCartData(state, shopId) {
      state.cartList[shopId].productList = {};
      setLocalCartList(state);
    },
  },
  actions: {},
  modules: {},
});
