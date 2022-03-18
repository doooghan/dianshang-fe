import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/Home"),
  },
  {
    path: "/addressCreate",
    name: "AddressCreate",
    component: () =>
      import(
        /* webpackChunkName: "addressCreate" */ "../views/addressCreate/AddressCreate"
      ),
  },
  {
    path: "/addressUpdate/:id",
    name: "AddressUpdate",
    component: () =>
      import(
        /* webpackChunkName: "addressUpdate" */ "../views/addressUpdate/AddressUpdate"
      ),
  },
  {
    path: "/address",
    name: "Address",
    component: () =>
      import(/* webpackChunkName: "address" */ "../views/address/Address"),
  },
  {
    path: "/mine",
    name: "Mine",
    component: () =>
      import(/* webpackChunkName: "mine" */ "../views/mine/Mine"),
  },
  {
    path: "/orderConfirmation/:id",
    name: "OrderConfirmation",
    component: () =>
      import(
        /* webpackChunkName: "orderConfirmation" */ "../views/orderConfirmation/OrderConfirmation"
      ),
  },
  {
    path: "/orderList",
    name: "OrderList",
    component: () =>
      import(
        /* webpackChunkName: "orderList" */ "../views/orderList/OrderList"
      ),
  },
  {
    path: "/cartList",
    name: "CartList",
    component: () =>
      import(/* webpackChunkName: "cartList" */ "../views/cartList/CartList"),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "shop" */ "../views/shop/Shop"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register/Register"),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/Login"),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  isLogin || to.name === "Login" || to.name === "Register"
    ? next()
    : next({ name: "Login" });
});

export default router;
