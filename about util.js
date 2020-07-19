const util = require("util");

// async function delay(duration = 1000) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(duration);
//     }, duration);
//   });
// }

// 将一个异步函数 转化为 回调模式的函数
// const delayCallback = util.callbackify(delay);

// delayCallback(500, (err, d) => {
//   console.log(d);
// });

// function delayCallBack(duration, callback) {
//   setTimeout(() => {
//     callback(null, duration);
//   }, duration);
// }

// 将一个回调模式的函数 转化成异步的promise  , 这样就方便使用 es6 里的东西了, async await 等
// const delay = util.promisify(delayCallBack);
// (async () => {
//   const r = await delay(500);
//   console.log(r);
// })();

const obj1 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
};

const obj2 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
      g: 6
    }
  }
};
// 深度严格 比较, 比较是否相等
console.log(util.isDeepStrictEqual(obj1, obj2)); 
