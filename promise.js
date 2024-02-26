//! Macro Tasks
//!? macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
//? microtasks: process.nextTick, Promises, queueMicrotask, MutationObserver
// setTimeout(function timeout() {
//     console.log('timeout');
// }, 0); //macro task queue, do after doing all microtask queue

// let p = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
// }); // creating promise do synchronously

// p.then(function(){
//     console.log('then.promise');
// }); // microtask queue
// console.log('end script');

//! /////////////////////////
// console.log('start');

// setTimeout(()=>console.log('setTimeout'));

// document.addEventListener("DOMContentLoaded", ()=>{
//     console.log('Event DOMContentLoaded')
// });

// console.log('end script');

//! /////////////////////////
// const checkRequestAnimationDiff = () => {
//     let prev;
//     function call() {
//         requestAnimationFrame((timestamp) => {
//             if (prev) {
//                 console.log(timestamp - prev); // 16.6ms
//             }
//             prev = timestamp;
//             call();
//         });
//     }
//     call();
// }
// checkRequestAnimationDiff();

//! PROMISE
// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('DONE'), 100);
//     });
// }
// asyncFunc()
// .then(x => console.log('Result:',x));

// let promise = new Promise(function(resolve, reject) {
//     resolve('success');
// });
// promise
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log('finished!')); // "finished";

//! Methods Of Promise

//! Promise.all получає масив, чекає поки передані проміси виконаються
//! і перходить у стан виконано.Якщо помилка то повертає помилку першого відхиленого
// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };
// const makePromise2 = (text, delay) => {
//   return new Promise((reject) => {
//     console.log("error");
//   });
// };

// const promiseA = makePromise("promiseA", 1000);
// const promiseB = makePromise("promiseB", 3000);
// const promiseC = makePromise2("promiseC", 1000);

// Promise.all([promiseA, promiseB, promiseC])
//   .then((result) => console.log(result)) //["promiseA", "promiseB"]
//   .catch((err) => console.log(err));

//! Promise.allSettled()-метод повертає масив проміс, з результатами fullfiled or rejected

// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };
// const makePromiseError = (text, delay) => {
//     return new Promise((resolve, reject) => setTimeout(() => reject(text), delay));
// };

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 1000);
// const promiseC = makePromiseError('promiseC', 1000);
// const promiseD = makePromiseError('promiseD', 1000);

// Promise.allSettled([ promiseA, promiseB, promiseD, promiseC])
//     .then(result => console.log('result',result)) //
//     .catch(err => console.log('err',err));

//! Promise.any - 1 true

// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };
// const makePromiseError = (text, delay) => {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => reject(text), delay)
//   );
// };

// const promiseA = makePromiseError("promiseA", 1000);
// const promiseB = makePromise("promiseB", 2000);

// Promise.any([promiseA, promiseB])
//   .then((result) => console.log(result)) // "promiseA"
//   .catch((err) => console.log(err));

//! Promise.race 1 fulfilled or rejected
//? Promise.race is settled as soon as any of the promises
// ?you feed it settle, whether they are fulfilled or rejected
// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };
// const makePromiseError = (text, delay) => {
//     return new Promise((resolve, reject) => setTimeout(() => reject(text), delay));
// };

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 1000);
// const promiseC = makePromiseError('promiseC', 1000);
// const promiseD = makePromiseError('promiseD', 1000);

// Promise.race([ promiseA, promiseB, promiseD, promiseC])
//     .then(result => console.log('result',result)) //
//     .catch(err => console.log('err',err));

//! Macro and micro
// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 1000);
// const promiseC = makePromise('promiseC', 1000);

// promiseB.then(res=>{
//     console.log('res :>> ', res);
// })
// promiseA.then(res=>{
//     console.log('res :>> ', res);
// })
// promiseC.then(res=>{
//     console.log('res :>> ', res);
// })

// !ssdfssssssssssssssssssssssssssssssssss

console.log("promisejs", "1");
setTimeout(function () {
  console.log("promisejs 2", 2);
}, 1000);

// setTimeout(function () {
//   return new Promise((resolve) => {
//     console.log("setTimeout promise");
//   });
// }, 1000);

// setTimeout(function () {
//   console.log("promisejs 3", 3);
// }, 2000);

// // // console.log("promisejs", "4");

// const a = () => {
//   return new Promise((resolve, reject) =>
    // setTimeout(() => resolve("promisejst, 5"), 1000)
//     resolve("promisejst, 5")
//   );
// };
// a().then((res) => console.log("promise 5 ", res));
// const makePromise = () => {
//   return new Promise((resolve) => {
//     console.log("make promise 10");
//   });
// };
// setTimeout(makePromise(), 1000000);

// setTimeout(function () {
//   console.log("promisejs", 7);
// }, 7000);
// const b = () => {
//   return new Promise((resolve, reject) => resolve("promisejst, 8"));
// };
// b().then((res) => console.log("promise :>> ", res));

// let start = performance.now();

// setTimeout(function () {
//   console.log("1", "2sec"); ///цикл на декілька сек
// }, 8000);
// // for () 10sec
// console.time("for");
// for (i = 0; i < 1190000000; i++) {
//   // do 6sec
//   //   console.log("i");
// }
// console.timeEnd("for");

// setTimeout(function () {
//   console.log("2", "10sec");
//   console.log("Execution time: ", performance.now() - start);
// }, 5000);

// fetch
//     .then(function () {})
//     .then(function () {})
//     .catch(function () {})
//     .catch(function () {})
//     .finally(function ())

// try {
//     new Promise(function (resolve, reject) {
//       // console.log('Promise');
//       resolve("text");
//       // throw new Error("Failed to");
//     })
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log("response", response);
//   //   return response.json();
//   })
//   .then((post) => {
//     console.log("post", post);
//     // return post
//   })
//   .then((p) => console.log("p", p))
//   .then((post) => console.log("post1 POST", post))
//   .then((post) => console.log("post2 POST", post))
//   .catch((error) => {
//     throw new Error("Failed to");
//   })
//   // .then((e) => {
//   //   return new Promise(function (resolve, reject) {
//   //     // console.log('Promise');
//   //     resolve();
//   //   });
//   // })
//   .then((v) => console.log("then 2", v))
//   .catch((error) => console.log("error 2"))
//   .then((post) => console.log("post2 after error"))
//   .finally((e) => console.log("finally"));
// }
// catch (error) {
//   console.error(error);
//   // expected output: ReferenceError: nonExistentFunction is not defined
//   // Note - error messages will vary depending on browser
// }
