import axios from "axios";

// 线上的 mock 接口
// 1. patch 接口用 post 模拟
// 2. orderList 组件内图片是 img 与真实接口i mgUrl 不同
// const instance = axios.create({
//   baseURL: "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd",
//   timeout: 1000,
// });

// 本地的服务与 mongo 服务
const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // 允许跨域传递cookie
  timeout: 1000,
});

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
};

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
};
export const patch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .patch(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
};
